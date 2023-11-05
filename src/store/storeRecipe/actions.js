export const actions = {
    async loadRecipes() {
        try {
            this.pending = true;
            const res = await fetch('/api/recipe');
            if (res.ok) {
                const data = await res.json();
                this.data = data;
            }
        } catch (err) {
            console.error(err);
        } finally {
            this.pending = false;
        }
    },

    async searchRecipe(keyword) {
        try {
            const res = await fetch(`${this.baseURL}search.php?s=${keyword}`);
            if (res.ok) {
                const data = await res.json();
                this.data = data.meals;
            }
        } catch (err) {
            console.error(err);
        }
    },
};
