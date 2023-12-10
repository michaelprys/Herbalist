import ViewHome from '@/view/ViewHome.vue';
import ViewRecipesByIngredient from '@/view/ViewRecipesByIngredient.vue';
import ViewRecipes from '@/view/ViewRecipes.vue';
import ViewSearchRecipe from '@/view/ViewSearchRecipe.vue';
import ViewLogin from '@/view/ViewLogin.vue';
import ViewNotFound from '@/view/ViewNotFound.vue';
import ViewRecipeDetail from '@/view/ViewRecipeDetail.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: ViewHome,
    },
    {
        path: '/login',
        name: 'login',
        component: ViewLogin,
    },
    {
        path: '/searchRecipes/:name?',
        name: 'searchRecipes',
        component: ViewSearchRecipe,
    },
    {
        path: '/recipes',
        name: 'recipes',
        component: ViewRecipes,
    },
    {
        path: '/recipesByIngredient/:ingredient?',
        name: 'recipesByIngredient',
        component: ViewRecipesByIngredient,
    },
    {
        path: '/recipeDetail/:recipe?',
        name: 'recipeDetail',
        component: ViewRecipeDetail,
    },
    {
        path: '/:notFound(.*)',
        name: 'notFound',
        component: ViewNotFound,
    },
];
