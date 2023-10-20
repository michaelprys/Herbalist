import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectToDb, getDb } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 8000;

connectToDb();

// server
app.get('/api/recipe', async (req, res) => {
    try {
        const col = getDb().collection('recipe');
        const recipe = await col.find().toArray();
        res.json(recipe);
    } catch (err) {
        console.error(err);
    }
});

// listen to port
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

// Static files and SPA routing
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});
