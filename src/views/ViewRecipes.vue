<template>
    <section class="section">
        <div class="container">
            <h1 class="section__title">Herbal Recipes</h1>
            <TransitionGroup class="recipes" name="list" tag="ul">
                <li
                    v-for="recipe in storeRecipe.paginatedRecipes"
                    :key="recipe.recipe_id">
                    <ItemCard
                        class="recipes__item"
                        :recipe="recipe"
                        :pending="storeRecipe.pending" />
                </li>
            </TransitionGroup>

            <div class="pagination">
                <router-link
                    :to="{
                        query: {
                            page: 1,
                        },
                    }"
                    class="pagination__btn-first"
                    :class="{ inactive: page.number === 1 }">
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
                </router-link>

                <!-- ./button first page -->

                <router-link
                    :to="{
                        query: {
                            page: page.number - 1,
                        },
                    }"
                    class="pagination__btn-prev"
                    :class="{ inactive: page.number === 1 }">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                    </svg>
                </router-link>
                <!-- ./button prev -->

                <ul class="pagination__list">
                    <li class="pagination__item">
                        <router-link
                            :to="{
                                query: {
                                    page: pageNumber,
                                },
                            }"
                            class="pagination__link"
                            v-for="pageNumber in totalPages"
                            :key="pageNumber"
                            :class="{ active: pageNumber === page.number }">
                            {{ pageNumber }}
                        </router-link>
                    </li>
                </ul>
                <!-- ./button page number -->

                <router-link
                    :to="{
                        query: {
                            page: page.number + 1,
                        },
                    }"
                    class="pagination__btn-next"
                    :class="{ inactive: page.number === totalPages }">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                </router-link>
                <!-- ./button next page -->

                <router-link
                    :to="{
                        query: {
                            page: totalPages,
                        },
                    }"
                    class="pagination__btn-last"
                    :class="{ inactive: page.number === totalPages }">
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
                </router-link>
                <!-- ./button last page -->
            </div>
        </div>
    </section>
</template>

<script setup>
import ItemCard from '@/components/common/ItemCard.vue';
import { onMounted, onBeforeUnmount, reactive, computed, watch } from 'vue';
import { useStoreRecipe } from '@/stores/storeRecipe';
import { useRoute } from 'vue-router';

const route = useRoute();
const storeRecipe = useStoreRecipe();

const page = reactive({
    number: computed(() => parseInt(route.query.page) || 1),
    size: 3,
});

const totalPages = computed(() => {
    return Math.ceil(storeRecipe.recipesCount / page.size);
});

const handleResize = () => {
    const mq1280 = window.matchMedia(`(width <= 1280px) and (width > 870px)`);
    const mq870 = window.matchMedia(`(width <= 870px)`);

    if (mq1280.matches) {
        page.size = 2;
    } else if (mq870.matches) {
        page.size = 1;
    } else {
        page.size = 3;
    }
};

const loadRecipes = async () =>
    await storeRecipe.loadPaginatedRecipes(page.number, page.size);

watch(() => route.query.page, loadRecipes, { immediate: true });
watch(
    () => page.size,
    newSize => {
        loadRecipes();
    }
);

onMounted(async () => {
    window.addEventListener('resize', handleResize);
    await storeRecipe.loadRecipesCount();
});

onBeforeUnmount(async () => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
.section {
    min-height: $h-section;
    @include bg;
    @supports (
        background-image: url('@img/decor/section/recipe-details/bg.avif')
    ) {
        background-image: url('@img/decor/section/recipe-details/bg.avif');
    }
    background-image: url('@img/decor/section/recipe-details/bg.jpg');
    padding-block: calc($spacing-common);
    &__title {
        margin-top: calc($spacing-fixed-header - $m-12);
        font-size: $fs-lg;
    }
}

.recipes {
    display: flex;
    justify-content: center;
    gap: $g-8;
    margin-top: $m-8;
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: $m-10;
    line-height: 2rem;
    gap: $g-4;
    &__list {
        & .disabled {
            cursor: not-allowed;
            opacity: $op-80;
        }
        display: flex;
        justify-content: space-between;
        border-radius: $br-full;
    }
    &__item {
        display: flex;
        gap: $g-2_5;
    }
    &__link {
        width: 2rem;
        height: 2rem;
        background-color: $c-white;
        cursor: pointer;
        text-align: center;
        transition: background-color $tr-smooth, color $tr-smooth;
        color: $c-grey-500;
        border-radius: $br-4;
        user-select: none;
        -webkit-user-drag: none;

        &.active {
            background-color: $c-grey-300;
            color: $c-white;
            &:hover {
                background-color: lighten($c-grey-300, 4%);
            }
        }
        &:hover {
            background-color: $c-grey-300;
            color: $c-white;
        }
    }
    &__btn-prev,
    &__btn-next,
    &__btn-first,
    &__btn-last {
        display: flex;
        align-items: center;
        border-radius: $br-4;
        background-color: $c-white;
        cursor: pointer;
        fill: #979797;
        width: 2rem;
        height: 2rem;
        transition: $tr-fast;
        color: #979797;
        text-align: center;
        font-size: $fs-small;
        -webkit-user-drag: none;
        & svg {
            margin-inline: auto;
        }
        &.inactive {
            @include btn-inactive;
            cursor: not-allowed;
        }
    }
}

@media (width <= $screen-md) {
    .section {
        &__title {
            font-size: $fs-h1;
        }
    }
}
</style>
