import ViewHome from '@/view/ViewHome.vue';
import ViewRecipesByIngredient from '@/view/ViewRecipesByIngredient.vue';
import ItemIngredientsList from '@/component/ItemIngredientsList.vue';
import ItemRecipesList from '@/component/ItemRecipesList.vue';
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
