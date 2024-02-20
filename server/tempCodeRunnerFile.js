app.get('/api/ingredient', async (req, res) => {
    console.log('req.query: ', req.query);
    const conn = await connectToDb();
    try {
        const {
            ingredient,
            ingredientCount,
            page,
            pageSize,
            recipesByIngredient,
            // ingredientsOfRecipe,
        } = req.query;
        // ingredient
        if (ingredient) {
            const ingredientRes = await pool.query(
                'SELECT * FROM ingredient ORDER BY ingredient_id'
            );
            res.json(ingredientRes);
            console.log(ingredientRes);
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
        // recipes by ingredient
        if (recipesByIngredient) {
            const ingredientName = req.params.ingredientName;
            const recipesByIngredient = await pool.query(
                'SELECT recipe.* FROM recipe JOIN recipe_ingredient ON recipe.recipe_id = recipe_ingredient.recipe_id JOIN ingredient ON recipe_ingredient.ingredient_id = ingredient.ingredient_id WHERE ingredient.name = $1;',
                [ingredientName]
            );
            res.json(recipesByIngredient.rows);
            console.log(ingredientName);
            console.log(recipesByIngredient.rows);
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
