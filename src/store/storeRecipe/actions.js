export const actions = {
    // load recipes
    async loadRecipes(keyword) {
        try {
            this.pending = true;
            keyword ??= '';
            const res = await fetch(
                `/api/recipe?keyword=${encodeURIComponent(keyword)}`
            );
            if (res.ok) {
                const data = await res.json();
                this.data = data;
            }
        } catch (err) {
            console.error('Error fetching recipes:', err);
            this.error = 'Failed to fetch recipes';
        } finally {
            this.pending = false;
        }
    },

    selectRecipe(recipe) {
        this.selectedRecipe = recipe;
    },

    clearSelectedRecipe() {
        this.selectedRecipe = null;
    },
};
