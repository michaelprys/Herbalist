import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { connectToDb, pool } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 8000;

app.use(express.json());

// recipe endpoint
app.get('/api/recipe', async (req, res) => {
    const conn = await connectToDb();
    try {
        const { keyword, popular, page, pageSize, recipesCount } = req.query;
        console.log('Request received with params:', req.query);
        // by keyword
        if (keyword) {
            const recipe = await pool.query(
                'SELECT * FROM recipe WHERE title ILIKE $1 ORDER BY recipe_id',
                [`%${keyword}%`]
            );
            return res.json(recipe.rows);
        }
        // popular recipes
        if (popular) {
            const popularRecipes = await pool.query(
                'SELECT * FROM recipe WHERE recipe_id IN (1, 3, 4, 7, 9, 10) ORDER BY recipe_id'
            );
            return res.json(popularRecipes.rows);
        }
        // pagination
        if (page && pageSize) {
            const offset = (page - 1) * pageSize;
            const recipes = await pool.query(
                'SELECT * FROM recipe ORDER BY recipe_id LIMIT $1 OFFSET $2',
                [pageSize, offset]
            );
            return res.json(recipes.rows);
        }
        // total recipe count
        if (recipesCount) {
            const recipesCount = await pool.query(
                'SELECT COUNT(*) FROM recipe'
            );
            return res.json(recipesCount.rows[0].count);
        }

        return res.status(400).json({ error: 'Invalid query parameters' });
    } catch (err) {
        console.error('Error processing request:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        if (conn) conn.release();
    }
});

// ingredient endpoint
app.get('/api/ingredient', async (req, res) => {
    console.log('req.query: ', req.query);
    const conn = await connectToDb();
    try {
        const { ingredient, ingredientCount, page, pageSize, keyword } =
            req.query;
        // ingredient
        if (ingredient) {
            const ingredientRes = await pool.query(
                'SELECT * FROM ingredient ORDER BY ingredient_id'
            );
            return res.json(ingredientRes);
        }
        // ingredient by keyword
        if (keyword) {
            const ingredientByKeyword = await pool.query(
                'SELECT * from ingredient WHERE name ILIKE $1 ORDER BY ingredient_id',
                [`%${keyword}%`]
            );
            return res.json(ingredientByKeyword.rows);
        }
        // pagination
        if (page && pageSize) {
            const offset = (page - 1) * pageSize;
            const ingredients = await pool.query(
                'SELECT * FROM ingredient ORDER BY ingredient_id LIMIT $1 OFFSET $2',
                [pageSize, offset]
            );
            return res.json(ingredients.rows);
        }
        // total ingredient count
        if (ingredientCount) {
            const ingredientCount = await pool.query(
                'SELECT COUNT(*) FROM ingredient'
            );
            return res.json(ingredientCount.rows[0].count);
        }
    } catch (err) {
        console.error('Error processing request:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        if (conn) conn.release();
    }
});

// recipes by ingredient endpoint
app.get('/api/recipesByIngredient', async (req, res) => {
    const ingredientName = req.query.ingredientName;
    try {
        const recipesByIngredient = await pool.query(
            'SELECT recipe.* FROM recipe JOIN recipe_ingredient ON recipe.recipe_id = recipe_ingredient.recipe_id JOIN ingredient ON ingredient.ingredient_id  = recipe_ingredient.ingredient_id WHERE ingredient.name ILIKE $1;',
            [`%${ingredientName}%`]
        );
        return res.json(recipesByIngredient.rows);
    } catch (err) {
        console.error('Error processing request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ingredients of recipe endpoint
app.get('/api/ingredientsOfRecipe/:recipe', async (req, res) => {
    const recipeName = req.params.recipe;
    try {
        const ingredientsOfRecipe = await pool.query(
            'SELECT ingredient.* FROM ingredient JOIN recipe_ingredient ON ingredient.ingredient_id = recipe_ingredient.ingredient_id JOIN recipe ON recipe.recipe_id = recipe_ingredient.recipe_id WHERE recipe.title ILIKE $1;',
            [`%${recipeName}%`]
        );
        return res.json(ingredientsOfRecipe.rows);
    } catch (err) {
        console.error('Error processing request:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Authentication
// registration
app.post('/api/register', async (req, res) => {
    const { firstname, lastname, email, username, password, confirmPassword } =
        req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const existingUser = await pool.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const encryptedPassword = await argon2.hash(password);

        const newUser = await pool.query(
            'INSERT INTO users (firstname, lastname, email, username, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [firstname, lastname, email, username, encryptedPassword]
        );
        const token = jwt.sign({ id: newUser.rows[0].id }, 'secretkey', {
            expiresIn: '1h',
        });
        res.json({
            token,
            message: 'You have successfully registered and logged in',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );
        if (result.rows.length === 0)
            return res
                .status(400)
                .json({ error: 'Invalid username or password' });

        const user = result.rows[0];
        const validPassword = await argon2.verify(user.password, password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id }, 'secretkey', {
            expiresIn: '1h',
        });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// server launch
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});
