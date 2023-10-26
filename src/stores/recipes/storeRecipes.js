import { defineStore } from 'pinia';

export const useStoreRecipes = defineStore('storeRecipes', {
    state: () => {
        return {
            data: [],
            pending: false,
        };
    },
    actions: {
        async loadRecipes() {
            try {
                this.pending = true;
                const res = await fetch('/api/recipe');
                if (res.ok) {
                    const data = await res.json();
                    this.data = data;
                } else {
                    console.error('Error: ', res.status, res.statusText);
                }
            } catch (err) {
                console.error(err);
            } finally {
                this.pending = false;
            }
        },
    },
});
