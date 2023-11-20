export const actions = {
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
            console.error(err);
        } finally {
            this.pending = false;
        }
    },
};
