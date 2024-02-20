<template>
    <div class="recipes-list">
        <h1 class="recipes-list__title">Recipes by ingredient</h1>
        <ul class="recipes-list__list">
            <li
                class="recipes-list__item"
                v-for="recipe in storeRecipe.recipesByIngredient"
                :key="recipe">
                <router-link
                    class="recipes-list__link"
                    :to="{
                        name: 'recipe-detail',
                        params: { recipe: recipe.slug },
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
.recipes-list {
    &__link {
        color: #4a5f72;
    }
}
</style>
