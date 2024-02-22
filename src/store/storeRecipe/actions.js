export const actions = {
    async loadRecipesByKeyword(keyword) {
        try {
            this.pending = true;
            keyword ??= '';
            const res = await fetch(
                `/api/recipe?keyword=${encodeURIComponent(keyword)}`
            );
            if (res.ok) {
                const data = await res.json();
                this.recipeByKeyword = data;
            }
        } catch (err) {
            console.error('Error fetching recipes:', err);
            this.error = 'Failed to fetch recipes';
        } finally {
            this.pending = false;
        }
    },

    async loadPopularRecipes() {
        try {
            this.pending = true;
            const res = await fetch(`/api/recipe?popular=true`);
            if (res.ok) {
                const data = await res.json();
                this.popularRecipes = data;
            }
        } catch (err) {
            console.error('Error fetching popular recipes:', err);
            this.error = 'Failed to fetch popular recipes';
        } finally {
            this.pending = false;
        }
    },

    async loadPaginatedRecipes(pageNumber, pageSize) {
        try {
            this.pending = true;
            const params = new URLSearchParams({
                page: pageNumber,
                pageSize: pageSize,
            });
            const res = await fetch(`/api/recipe?${params.toString()}`);
            if (res.ok) {
                const data = await res.json();
                this.paginatedRecipes = data;
            }
        } catch (err) {
            console.error('Error fetching recipes:', err);
            this.error = 'Failed to fetch recipes';
        } finally {
            this.pending = false;
        }
    },

    async loadRecipesCount() {
        try {
            this.pending = true;
            const res = await fetch(`/api/recipe?recipesCount=true`);
            if (res.ok) {
                const data = await res.json();
                this.recipesCount = data;
            }
        } catch (err) {
            console.error('Error fetching total recipes:', err);
            this.error = 'Failed to fetch total recipes';
        } finally {
            this.pending = false;
        }
    },

    async loadIngredients() {
        try {
            this.pending = true;
            const res = await fetch(`/api/ingredient?ingredient=true`);
            if (res.ok) {
                const data = await res.json();
                this.ingredients = data;
            }
        } catch (err) {
            console.error('Error fetching ingredients:', err);
            this.error = 'Failed to fetch ingredients';
        } finally {
            this.pending = false;
        }
    },

    async loadPaginatedIngredients(page, pageSize) {
        try {
            this.pending = true;
            const params = new URLSearchParams({ page, pageSize });
            const res = await fetch(`/api/ingredient?${params.toString()}`);
            if (res.ok) {
                const data = await res.json();
                this.paginatedIngredients = data;
            }
        } catch (err) {
            console.error('Error fetching ingredients:', err);
            this.error = 'Failed to fetch ingredients';
        } finally {
            this.pending = false;
        }
    },

    async loadIngredientsCount() {
        try {
            this.pending = true;
            const res = await fetch(`/api/ingredient?ingredientCount=true`);
            if (res.ok) {
                const data = await res.json();
                this.ingredientCount = data;
            }
        } catch (err) {
            console.error('Error fetching total ingredients:', err);
            this.error = 'Failed to fetch total ingredients';
        } finally {
            this.pending = false;
        }
    },

    async loadRecipesByIngredient(ingredientName) {
        try {
            this.pending = true;
            const res = await fetch(
                `/api/recipesByIngredient?ingredientName=${encodeURIComponent(
                    ingredientName
                )}`
            );
            if (res.ok) {
                const data = await res.json();
                this.recipesByIngredient = data;
            }
        } catch (err) {
            console.error('Error fetching recipes by ingredient:', err);
            this.error = 'Failed to fetch recipes by ingredient';
        } finally {
            this.pending = false;
        }
    },

    async loadIngredientsOfRecipe(recipeName) {
        try {
            this.pending = true;
            const res = await fetch(
                `/api/ingredientsOfRecipe/${encodeURIComponent(recipeName)}`
            );
            if (res.ok) {
                const data = await res.json();
                this.ingredientsOfRecipe = data;
                console.log(
                    'Ingredients of recipe: ',
                    this.ingredientsOfRecipe
                );
            }
        } catch (err) {
            console.error('Error fetching ingredients of this recipe:', err);
            this.error = 'Failed to fetch ingredients of this recipe';
        } finally {
            this.pending = false;
        }
    },

    selectRecipe(recipe) {
        this.selectedRecipe = recipe;
    },
};
