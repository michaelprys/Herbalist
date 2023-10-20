import ViewHome from '@/views/ViewHome.vue';
import ViewRecipesByIngredients from '@/views/ViewRecipesByIngredients.vue';
import ViewRecipesByLetter from '@/views/ViewRecipesByLetter.vue';
import ViewSearchRecipes from '@/views/ViewSearchRecipes.vue';
import ViewAbout from '@/views/ViewAbout.vue';
import ViewLogin from '@/views/ViewLogin.vue';
import ViewNotFound from '@/views/ViewNotFound.vue';

export const routes = [
    {
        path: '/:notFound',
        name: 'notFound',
        component: ViewNotFound,
    },
    {
        path: '/',
        name: 'Home',
        component: ViewHome,
    },
    {
        path: '/searchRecipes',
        name: 'searchRecipes',
        component: ViewSearchRecipes,
    },
    {
        path: '/recipesByLetter',
        name: 'recipesByLetter',
        component: ViewRecipesByLetter,
    },
    {
        path: '/recipesByIngredients',
        name: 'recipesByIngredients',
        component: ViewRecipesByIngredients,
    },
    {
        path: '/about',
        name: 'about',
        component: ViewAbout,
    },
    {
        path: '/login',
        name: 'login',
        component: ViewLogin,
    },
];
