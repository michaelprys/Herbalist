<template>
    <div class="recipesOfIngredient">
        <div class="recipesOfIngredient__header">
            <a class="recipesOfIngredient__back-btn" @click="$router.back()">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.2rem"
                    height="2.2rem"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path
                        d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                </svg>
            </a>
            <h1 class="recipesOfIngredient__title">Recipes by ingredient</h1>
        </div>
        <ul class="recipesOfIngredient__list">
            <li
                class="recipesOfIngredient__item"
                v-for="recipe in storeRecipe.recipesByIngredient"
                :key="recipe">
                <router-link
                    class="recipesOfIngredient__link"
                    :to="{
                        name: 'recipe-detail',
                        params: { recipe: recipe.title },
                    }"
                    @click="handleClick(recipe)">
                    {{ recipe.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useStoreRecipe } from '@/store/storeRecipe';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const storeRecipe = useStoreRecipe();

const handleClick = recipe => {
    storeRecipe.selectRecipe(recipe);
};

onMounted(async () => {
    await storeRecipe.loadRecipesByIngredient(route.params.ingredientName);
});
</script>

<style lang="scss">
.recipesOfIngredient {
    &__header {
        position: relative;
    }
    &__back-btn {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        fill: #4a5f72a9;
        transition: $tr-smooth;
        cursor: pointer;
        margin-left: 0.8rem;
        &:hover {
            fill: #4a5f72;
        }
    }
}
</style>
