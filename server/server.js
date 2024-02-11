import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectToDb, pool } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 8000;

// recipe endpoint
app.get('/api/recipe', async (req, res) => {
    console.log('req.query:', req.query);
    const conn = await connectToDb();
    try {
        const { keyword, popular, page, pageSize, recipesCount } = req.query;
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
        if (recipesCount) {
            const recipesCount = await pool.query(
                'SELECT COUNT(*) FROM recipe'
            );
            res.json(recipesCount.rows[0].count);
        }
    } catch (err) {
        console.error('Error processing request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        if (conn) conn.release();
    }
});

// ingredient endpoint
app.get('/api/ingredient', async (req, res) => {
    console.log('req.query: ', req.query);
    const conn = await connectToDb();
    try {
        const { ingredient, ingredientCount, page, pageSize } = req.query;
        // ingredient
        if (ingredient) {
            const ingredientRes = await pool.query(
                'SELECT * FROM ingredient ORDER BY ingredient_id'
            );
            res.json(ingredientRes.rows);
        }
        // pagination
        if (page && pageSize) {
            const offset = (page - 1) * pageSize;
            const ingredients = await pool.query(
                'SELECT * FROM ingredient ORDER BY ingredient_id LIMIT $1 OFFSET $2',
                [pageSize, offset]
            );
            res.json(ingredients.rows);
        }
        // total ingredient count
        if (ingredientCount) {
            const ingredientCount = await pool.query(
                'SELECT COUNT(*) FROM ingredient'
            );
            res.json(ingredientCount.rows[0].count);
        }
    } catch (err) {
        console.error('Error processing request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
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
