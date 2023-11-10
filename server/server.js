import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectToDb, pool } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 8000;

app.get('/api/recipe', async (req, res) => {
    const conn = await connectToDb();
    try {
        const keyword = req.query.keyword;
        if (keyword) {
            const recipe = await pool.query(
                'SELECT * FROM recipe WHERE title ILIKE $1 ORDER BY id',
                [`%${keyword}%`]
            );
            res.json(recipe.rows);
        } else {
            const recipe = await pool.query('SELECT * FROM recipe ORDER BY id');
            res.json(recipe.rows);
        }
    } catch (err) {
        console.error(err);
    } finally {
        conn.release();
    }
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});
