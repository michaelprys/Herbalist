import { defineStore } from 'pinia';

export const useStoreRecipes = defineStore('storeRecipes', {
    state: () => {
        return {
            data: [],
        };
    },
    actions: {
        async loadRecipes() {
            try {
                const res = await fetch('/api/recipe');
                if (res.ok) {
                    const data = await res.json();
                    this.data = data[0].recipes;
                } else {
                    console.error('Error: ', res.status, res.statusText);
                }
            } catch (err) {
                console.error(err);
            }
        },
    },
});
