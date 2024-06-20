import { defineStore } from 'pinia';
import type { Ingredient, Recipe } from '@/types/dbTypes';

interface State {
    popularRecipes: ReadonlyArray<Recipe>;
    recipeByKeyword: string[];
    paginatedRecipes: ReadonlyArray<Recipe>;
    recipesCount: number;
    selectedRecipe: Readonly<Recipe> | null;
    ingredients: string[];
    paginatedIngredients: ReadonlyArray<Ingredient>;
    ingredientCount: number;
    recipesByIngredient: ReadonlyArray<Recipe>;
    ingredientsOfRecipe: ReadonlyArray<Ingredient>;
    ingredientByKeyword: ReadonlyArray<Ingredient>;
    pending: boolean;
    error: string;
}

export const useStoreRecipe = defineStore({
    id: 'storeRecipe',
    persist: true,
    state: (): State => ({
        popularRecipes: [],
        recipeByKeyword: [],
        paginatedRecipes: [],
        recipesCount: 0,
        selectedRecipe: null,
        ingredients: [],
        paginatedIngredients: [],
        ingredientCount: 0,
        recipesByIngredient: [],
        ingredientsOfRecipe: [],
        ingredientByKeyword: [],
        pending: false,
        error: '',
    }),

    actions: {
        async loadRecipesByKeyword(keyword: string) {
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

        async loadPaginatedRecipes(pageNumber: number, pageSize: number) {
            try {
                this.pending = true;
                const params = new URLSearchParams({
                    page: pageNumber.toString(),
                    pageSize: pageSize.toString(),
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

        async loadPaginatedIngredients(page: number, pageSize: number) {
            try {
                this.pending = true;
                const params = new URLSearchParams({
                    page: page.toString(),
                    pageSize: pageSize.toString(),
                });
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

        async loadRecipesByIngredient(ingredientName: string) {
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

        async loadIngredientsOfRecipe(recipeName: string) {
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
                console.error(
                    'Error fetching ingredients of this recipe:',
                    err
                );
                this.error = 'Failed to fetch ingredients of this recipe';
            } finally {
                this.pending = false;
            }
        },

        async loadIngredientsByKeyword(keyword: string) {
            try {
                this.pending = true;
                keyword ??= '';
                const res = await fetch(
                    `/api/ingredient?keyword=${encodeURIComponent(keyword)}`
                );
                if (res.ok) {
                    const data = await res.json();
                    this.ingredientByKeyword = data;
                }
            } catch (err) {
                console.error('Error fetching ingredients', err);
                this.error = 'Failed to fetch ingredients';
            } finally {
                this.pending = false;
            }
        },

        selectRecipe(recipe: Recipe) {
            this.selectedRecipe = recipe;
        },
    },
});
