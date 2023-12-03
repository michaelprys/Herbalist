<template>
    <section class="section section--recipes">
        <div class="container">
            <h1 class="section__title section__title--recipes">
                Herbal Recipes
            </h1>
            <div class="recipes">
                <div
                    v-for="recipe in storeRecipe.data.slice(0, 3)"
                    :key="recipe.recipe_id">
                    <ItemCard
                        class="recipes__item"
                        :data="recipe"
                        :pending="storeRecipe.pending"></ItemCard>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ItemCard from '@/component/ItemCard.vue';
import { onMounted } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';

const storeRecipe = useStoreRecipe();

onMounted(async () => {
    await storeRecipe.loadRecipes();
});
</script>

<style lang="scss">
.section--recipes {
    min-height: 100vh;
    @include bg;
    background-image: url('@img/decor/section/recipe-details/bg.jpg');
    padding-block: $spacing-common;
    margin-top: calc($spacing-fixed-header - $m-6);
}

.section__title--recipes {
    padding-left: 64px;
}

.recipes {
    display: flex;
    justify-content: center;
    gap: $g-8;
    &__item {
        width: $w-96;
    }
}
</style>
