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
    name: "ViewSearchRecipes",
    component: ViewSearchRecipes,
  },
  {
    path: "/recipesByLetter",
    name: "ViewRecipesByLetter",
    component: ViewRecipesByLetter,
  },
  {
    path: "/recipesByIngredients",
    name: "ViewRecipesByIngredients",
    component: ViewRecipesByIngredients,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];
