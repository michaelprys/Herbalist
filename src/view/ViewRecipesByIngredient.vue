<template>
    <div class="section section--ingredients">
        <div class="container">
            <div class="ingredient">
                <h1 class="ingredient__title">List of Ingredients</h1>
                <!-- <ul class="ingredient__list">
                    <li
                        class="ingredient__item"
                        v-for="ingredient in storeRecipe.ingredients"
                        :key="ingredient.recipe_id">
                        <router-link to="/">
                            <span class="ingredient__link">
                                {{ ingredient.ingredient }}
                            </span>
                        </router-link>
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';

const storeRecipe = useStoreRecipe();

// hooks
onMounted(async () => {
    await storeRecipe.loadRecipesByKeyword();
});
</script>

<style lang="scss">
.section--ingredients {
    min-height: $h-section;
    @include bg;
    background-image: url('@img/decor/section/recipe-details/bg.jpg');
    padding-block: $spacing-common;
}

.ingredient {
    margin-top: calc($spacing-fixed-header - $m-12);
    background-color: #ffffffda;
    margin-bottom: $m-40;
    margin-inline: auto;
    max-width: 78rem;
    border-radius: $br-4;
    box-shadow: $dc-shadow-card;
    padding: $p-10;
    color: #4a5f72;
    &__title {
        text-align: center;
        font-size: $fs-h1;
    }
    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: $g-4;
        margin-top: $m-6;
    }
    &__link {
        color: #4a5f72;
        &:hover {
            background-color: $c-grey-300;
        }
    }
}
</style>
