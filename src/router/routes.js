import ViewHome from '@/views/ViewHome.vue';
import ViewRecipesByIngredient from '@/views/ViewRecipesByIngredient.vue';
import ItemIngredientsList from '@/components/common/ItemIngredientsList.vue';
import ItemRecipesList from '@/components/common/ItemRecipesList.vue';
import ViewRecipes from '@/views/ViewRecipes.vue';
import ViewSearchRecipe from '@/views/ViewSearchRecipe.vue';
import ViewNotFound from '@/views/ViewNotFound.vue';
import ViewRecipeDetail from '@/views/ViewRecipeDetail.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: ViewHome,
    },
    {
        path: '/search-recipes/:name?',
        name: 'search-recipes',
        component: ViewSearchRecipe,
    },
    {
        path: '/recipes',
        name: 'recipes',
        component: ViewRecipes,
    },
    {
        path: '/ingredients',
        component: ViewRecipesByIngredient,
        children: [
            {
                path: ':ingredient?',
                name: 'ingredient',
                component: ItemIngredientsList,
            },
            {
                path: ':ingredientName/recipes',
                name: 'ingredientRecipes',
                component: ItemRecipesList,
            },
        ],
    },
    {
        path: '/recipe-detail/:recipe?',
        name: 'recipe-detail',
        component: ViewRecipeDetail,
    },
    {
        path: '/:notFound(.*)',
        name: 'notFound',
        component: ViewNotFound,
    },
];
