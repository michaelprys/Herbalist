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
        const { count, popular, page, pageSize, keyword } = req.query;

        // by keyword
        if (keyword) {
            const recipe = await pool.query(
                'SELECT * FROM recipe WHERE title ILIKE $1 ORDER BY recipe_id',
                [`%${keyword}%`]
            );
            res.json(recipe.rows);
        }
        // popular recipes
        if (popular) {
            const popularRecipes = await pool.query(
                'SELECT * FROM recipe WHERE recipe_id IN (1, 3, 4, 7, 9, 10) ORDER BY recipe_id'
            );
            res.json(popularRecipes.rows);
        }
        // pagination
        if (page && pageSize) {
            const offset = (page - 1) * pageSize;
            const recipes = await pool.query(
                'SELECT * FROM recipe ORDER BY recipe_id LIMIT $1 OFFSET $2',
                [pageSize, offset]
            );
            res.json(recipes.rows);
        }
        // total recipe count
        if (count) {
            const recipesCount = await pool.query(
                'SELECT COUNT(*) FROM recipe'
            );
            res.json(recipesCount.rows[0].count);
        }
    } catch (err) {
        console.error('Error processing pagination request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        // db connection release
        if (conn) conn.release();
    }
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});
