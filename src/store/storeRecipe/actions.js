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

    async loadPaginatedRecipes(page, pageSize) {
        try {
            this.pending = true;
            const params = new URLSearchParams({ page, pageSize });
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
            const res = await fetch(`/api/recipe?count=true`);
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
            const res = await fetch(`/api/recipe?ingredient=true`);
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

    selectRecipe(recipe) {
        this.selectedRecipe = recipe;
    },
};
