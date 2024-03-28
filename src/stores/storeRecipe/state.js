export const state = () => {
    return {
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
    };
};
