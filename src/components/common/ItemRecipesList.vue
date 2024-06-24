<template>
    <div class="recipes">
        <div class="recipes__header">
            <a class="recipes__back-btn" @click="$router.back()">
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
            <h1 class="recipes__title">
                Recipes with <span>{{ route.params.ingredientName }}</span>
            </h1>
        </div>
        <ul class="recipes__list">
            <li
                class="recipes__item"
                v-for="recipe in storeRecipe.recipesByIngredient"
                :key="recipe.recipe_id">
                <router-link
                    class="recipes__link"
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

<script setup lang="ts">
import { useStoreRecipe } from '@/stores/storeRecipe';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { Recipe } from '@/types/dbTypes';

const route = useRoute();

const storeRecipe = useStoreRecipe();

const handleClick = (recipe: Recipe) => {
    storeRecipe.selectRecipe(recipe);
};

onMounted(async () => {
    await storeRecipe.loadRecipesByIngredient(
        route.params.ingredientName as string
    );
});
</script>

<style scoped lang="scss">
.recipes {
    &__header {
        position: relative;
    }
    &__back-btn {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        fill: #4a5f72a9;
        transition: fill $tr-smooth;
        cursor: pointer;
        margin-left: $m-4;
        &:hover {
            fill: #4a5f72;
        }
    }
    &__link {
        color: #4a5f72;
        padding-inline: $p-3;
        padding-block: $p-2;
        height: 100%;
        width: 100%;
    }
    &__title {
        text-align: center;
        font-size: $fs-h1;
    }
}
.recipes {
    &__not-found {
        margin-top: $m-4;
    }
    &__search {
        position: relative;
    }
    &__input {
        @include bar;
        max-width: 100%;
        margin-top: $m-4;
        padding-right: $p-10;
        background-color: $c-white;
        border: 2px solid #4a5f7228;
        min-height: $h-10;
        padding-block: $p-1;
        color: #4a5f72;
        font-size: $fs-h5;
        &::placeholder {
            font-size: $fs-h6;
            color: #4a5f729d;
        }
        &:focus {
            border-color: #4a5f724b;
        }
    }
    &__search-icon {
        position: absolute;
        top: 2px;
        right: 15px;
        fill: #4a5f72ca;
        transition: fill $tr-smooth;
        &:hover {
            fill: #4a5f72;
        }
    }

    &__title {
        text-align: center;
        font-size: $fs-h1;
    }
    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        row-gap: $g-4;
        column-gap: $g-6;
        gap: $g-4;
        margin-top: $m-6;
    }
    &__item {
        transition: background-color $tr-smooth;
        border-radius: $br-4;
        background-color: #4a5f721b;
        font-size: $fs-base;
        &:hover {
            background-color: #4a5f7230;
        }
    }
    &__link {
        color: #4a5f72;
        padding-inline: $p-3;
        padding-block: $p-2;
        height: 100%;
        width: 100%;
    }
    &__icon {
        fill: #4a5f72c6;
    }
    &__wrapper {
        display: flex;
        align-items: center;
        gap: $g-3;
    }
    &__pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
        padding-top: $m-10;
    }
    &__pagination-item {
        font-size: $fs-h5;
    }
    &__btn-left,
    &__btn-right,
    &__btn-icon {
        transition: fill $tr-smooth;
        fill: #4a5f72ad;
        &.inactive {
            fill: rgba(173, 173, 173, 0.746);
            pointer-events: none;
        }
        &:hover {
            fill: #4a5f72;
        }
    }
}

@media (width <= 80rem) {
    .recipes {
        &__title {
            font-size: $fs-h3;
        }
        &__list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media (width <= $screen-sm) {
    .recipes {
        &__title {
            font-size: $fs-h5;
        }
        &__list {
            grid-template-columns: repeat(1, 1fr);
        }
        &__item {
            font-size: 1rem;
        }
    }
}
</style>
