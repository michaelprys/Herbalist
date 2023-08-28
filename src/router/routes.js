import ViewHome from "@/views/ViewHome.vue";
import ViewRecipesByIngredients from "@/views/ViewRecipesByIngredients.vue";
import ViewRecipesByLetter from "@/views/ViewRecipesByLetter.vue";
import ViewSearchRecipes from "@/views/ViewSearchRecipes.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: ViewHome,
  },
  {
    path: "/searchRecipes",
    name: "searchRecipes",
    component: ViewSearchRecipes,
  },
  {
    path: "/recipesByLetter",
    name: "recipesByLetter",
    component: ViewRecipesByLetter,
  },
  {
    path: "/recipesByIngredients",
    name: "recipesByIngredients",
    component: ViewRecipesByIngredients,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];
