<template>
    <section class="section">
        <div class="container-recipes">
            <div class="recipes">
                <div class="recipes__inner">
                    <!-- <div class="recipes__controls">
                        <select class="recipes__filter" name="filter" id="type">
                            <option value="">Filter by</option>
                            <option value="drinks">Drinks</option>
                            <option value="soups">Soups</option>
                            <option value="salads">Salads</option>
                            <option value="main course">Main Course</option>
                        </select>
                    </div> -->
                    <TransitionGroup class="recipes__list" name="list" tag="ul">
                        <li
                            v-for="recipe in storeRecipe.paginatedRecipes"
                            :key="recipe.recipe_id">
                            <ItemCard
                                class="recipes__item"
                                :recipe="recipe"
                                :pending="storeRecipe.pending" />
                        </li>
                    </TransitionGroup>
                </div>
            </div>
            <div class="pagination" v-if="width > 1040">
                <router-link
                    :to="{
                        query: {
                            page: 1,
                        },
                    }"
                    class="pagination__btn-first"
                    :class="{ inactive: page.number === 1 }">
                    <IconToFirstPage />
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
                    <IconPrev />
                </router-link>
                <!-- ./button prev -->

                <span class="pagination__numbers">
                    {{ page.number }} / {{ totalPages }}
                </span>
                <!-- ./button page number -->

                <router-link
                    :to="{
                        query: {
                            page: page.number + 1,
                        },
                    }"
                    class="pagination__btn-next"
                    :class="{ inactive: page.number === totalPages }">
                    <IconNext />
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
                    <IconToLastPage />
                </router-link>
                <!-- ./button last page -->
            </div>
            <div class="loading" v-else>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ItemCard from '@/components/common/ItemCard.vue';
import { onMounted, ref, reactive, computed, watch, watchEffect } from 'vue';
import { useStoreRecipe } from '@/stores/storeRecipe';
import { useRoute } from 'vue-router';
import IconToFirstPage from '@/components/icons/IconToFirstPage.vue';
import IconToLastPage from '@/components/icons/IconToLastPage.vue';
import IconPrev from '@/components/icons/IconPrev.vue';
import IconNext from '@/components/icons/IconNext.vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const route = useRoute();
const storeRecipe = useStoreRecipe();

interface Page {
    number: number;
    size: number;
}

const page = reactive<Page>({
    number: 1,
    size: 3,
});

watchEffect(() => {
    page.number = parseInt(route.query.page as string) || 1;
});

const totalPages = computed(() => {
    return Math.ceil(storeRecipe.recipesCount / page.size);
});

const loadRecipes = async () => {
    try {
        await storeRecipe.loadPaginatedRecipes(page.number, page.size);
    } catch (error) {
        console.error('Failed to load recipes:', error);
    }
};

watch(() => route.query.page, loadRecipes, { immediate: true });
watch(
    () => page.size,
    (newSize: number) => {
        loadRecipes();
    }
);

// const keyword = ref('');

// const recipe = computed(() => storeRecipe.recipeByKeyword);

// const loadRecipesByKeyword = async () => {
//     if (keyword.value) {
//         await storeRecipe.loadRecipesByKeyword(keyword.value);
//     }
// };

// const handleClick = recipe => {
//     storeRecipe.selectRecipe(recipe);
// };

onMounted(async () => {
    console.log(await storeRecipe.loadRecipesCount());
});
</script>

<style scoped lang="scss">
.container-recipes {
    position: relative;
    margin-top: $m-44;
    max-width: 100%;
    padding-inline: $p-4;
}

.section {
    min-height: 100svh;
    @include bg;
    background-attachment: fixed;
    @supports (background-image: url('@img/section/recipe-details/bg.avif')) {
        background-image: url('@img/section/recipe-details/bg.avif');
    }
    background-image: url('@img/section/recipe-details/bg.jpg');
}

.recipes {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__inner {
        display: flex;
        flex-direction: column;
    }
    &__list {
        display: flex;
        justify-content: center;
        gap: $g-8;
        margin-top: $m-6;
    }
    &__controls {
        margin-left: auto;
        width: $w-24;
        border-radius: $br-4;
        color: #4a5f72;
    }
    &__filter {
        border: none;
        width: 100%;
        border-radius: $br-4;
        font-size: $fs-base;
        & option {
            background-color: $c-pink;
            color: $c-black;
        }
    }
    &__input,
    &__filter {
        border: $bw-2 solid rgba(128, 128, 128, 0.193);
        outline: 2px solid transparent;
        font-family: $ff-primary;
        padding: $p-2;
        text-align: left;
        transition: outline $tr-fast;
        &:focus {
            outline-color: $c-pink;
        }
    }
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: $m-10;
    line-height: 2rem;
    gap: $g-4;
    &__numbers {
        background-color: $c-white;
        color: $c-grey-500;
        padding-inline: $p-2;
        border-radius: $br-4;
    }
    &__btn-prev,
    &__btn-next,
    &__btn-first,
    &__btn-last {
        display: flex;
        align-items: center;
        background-color: $c-white;
        cursor: pointer;
        fill: #979797;
        width: $w-8;
        height: $h-8;
        border-radius: $br-4;
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
        &:hover {
            background-color: $c-grey-300;
            fill: $c-white;
        }
    }
}

.loading {
    display: flex;
    justify-content: center;
    gap: $g-2_5;
    margin-top: $m-6;
    & span {
        width: $w-3_5;
        height: $h-3_5;
        background-color: $c-white;
        border-radius: $br-full;
        animation: loading 2s infinite ease-in-out;
        &:nth-child(2) {
            animation-delay: 0.4s;
        }
        &:nth-child(3) {
            animation-delay: 0.8s;
        }
    }
}

@media (width <= $screen-xl) {
    .container--recipes {
        max-width: $container-xl;
    }
}
@media (width <= $screen-lg) {
    .recipes {
        &__list {
            flex-wrap: wrap;
        }
    }
}
@media (width <= 50.125rem) {
    .section {
        &__title {
            font-size: $fs-h1;
        }
    }
}
</style>
