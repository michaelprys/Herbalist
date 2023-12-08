<template>
    <section class="section section--recipes">
        <div class="container">
            <h1 class="section__title section__title--recipes">
                Herbal Recipes
            </h1>
            <div class="recipes">
                <div
                    v-for="recipe in storeRecipe.paginatedRecipes"
                    :key="recipe.recipe_id">
                    <ItemCard
                        class="recipes__item"
                        :recipe="recipe"
                        :pending="storeRecipe.pending"></ItemCard>
                </div>
            </div>

            <div class="pagination">
                <button
                    class="pagination__btn-first"
                    type="button"
                    @click="toFirstPage">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="m12.707 7.707-1.414-1.414L5.586 12l5.707 5.707 1.414-1.414L8.414 12z"></path>
                        <path
                            d="M16.293 6.293 10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"></path>
                        First
                    </svg>
                </button>
                <button
                    class="pagination__btn-prev"
                    type="button"
                    @click="toPrevPage">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                    </svg>
                </button>

                <ul class="pagination__list">
                    <li
                        class="pagination__item"
                        v-for="pageNumber in totalPages"
                        :key="pageNumber">
                        {{ pageNumber }}
                    </li>
                </ul>

                <button
                    class="pagination__btn-next"
                    type="button"
                    @click="toNextPage">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                </button>
                <button
                    class="pagination__btn-last"
                    type="button"
                    @click="toLastPage">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
                        <path
                            d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import ItemCard from '@/component/ItemCard.vue';
import { onMounted, reactive, computed } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';

const storeRecipe = useStoreRecipe();

const page = reactive({
    number: 1,
    size: 3,
});

// const startPage = computed(() => {
//     return Math.ceil(page.number * page.size);
// });

const totalPages = computed(() => {
    return Math.ceil(storeRecipe.recipesCount / page.size);
});

const loadRecipes = async () =>
    await storeRecipe.loadPaginatedRecipes(page.number, page.size);

// const toSpecificPage = async() => {
// }

const toFirstPage = async () => {
    page.number = 1;
    await loadRecipes();
};

const toLastPage = async () => {
    page.number = totalPages.value;
    await loadRecipes();
};

const toPrevPage = async () => {
    if (page.number > 1) {
        page.number--;
        await loadRecipes();
    }
};

const toNextPage = async () => {
    if (page.number < totalPages.value) {
        page.number++;
        await loadRecipes();
    }
};

onMounted(async () => {
    await storeRecipe.loadRecipesCount();
    await loadRecipes();
});
</script>

<style lang="scss">
.section--recipes {
    min-height: $h-section;
    @include bg;
    background-image: url('@img/decor/section/recipe-details/bg.jpg');
    padding-block: calc($spacing-common);
}

.section__title--recipes {
    padding-left: 64px;
    margin-top: calc($spacing-fixed-header - $m-12);
}

.recipes {
    display: flex;
    justify-content: center;
    gap: $g-8;
    &__item {
        width: $w-96;
    }
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: $m-10;
    line-height: 2rem;
    gap: $g-4;
    &__list {
        & .disabled {
            cursor: not-allowed;
            opacity: $op-80;
        }
        display: flex;
        gap: $g-2_5;
        justify-content: space-between;
        border-radius: $br-full;
        // background-color: $c-white;
        // width: $w-48;
    }
    &__item {
        width: 2rem;
        height: 2rem;
        background-color: $c-white;
        cursor: pointer;
        text-align: center;
        transition: $tr-smooth;
        color: $c-grey-500;
        border-radius: $br-4;
        &:hover,
        &.active {
            background-color: #979797;
            color: $c-white;
        }
    }
    &__btn-prev,
    &__btn-next,
    &__btn-first,
    &__btn-last {
        border-radius: $br-4;
        background-color: $c-white;
        cursor: pointer;
        fill: #979797;
        width: 2rem;
        height: 2rem;
        transition: $tr-smooth;
        color: #979797;
        text-align: center;
        font-size: $fs-small;
        &:hover {
            background-color: #979797;
            fill: $c-white;
        }
        & svg {
            margin-inline: auto;
        }
    }

    &__btn-first,
    &__btn-prev {
        margin-right: $m-2;
    }
    &__btn-last,
    &__btn-next {
        margin-left: $m-2;
    }
}
</style>
