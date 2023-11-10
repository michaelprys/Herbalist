import ViewHome from '@/view/ViewHome.vue';
import ViewRecipesByIngredient from '@/view/ViewRecipesByIngredient.vue';
import ViewRecipesByLetter from '@/view/ViewRecipesByLetter.vue';
import ViewSearchRecipe from '@/view/ViewSearchRecipe.vue';
import ViewLogin from '@/view/ViewLogin.vue';
import ViewNotFound from '@/view/ViewNotFound.vue';
import ViewRecipeDetail from '@/view/ViewRecipeDetail.vue';

export const routes = [
    {
        path: '/:notFound',
        name: 'notFound',
        component: ViewNotFound,
    },
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
        path: '/recipesByLetter/:letter?',
        name: 'recipesByLetter',
        component: ViewRecipesByLetter,
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
];
