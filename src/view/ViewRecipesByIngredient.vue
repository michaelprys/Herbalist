<template>
    <div class="section section--ingredients">
        <div class="container">
            <div class="ingredient">
                <h1 class="ingredient__title">List of Ingredients</h1>
                <ul class="ingredient__list">
                    <li
                        class="ingredient__item"
                        v-for="ingredient in storeRecipe.paginatedIngredients"
                        :key="ingredient.ingredient_id">
                        <router-link class="ingredient__link" to="/">
                            <span class="ingredient__wrapper">
                                <svg
                                    class="ingredient__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.2rem"
                                    height="1.2rem"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M21 10H3a1 1 0 0 0-1 1 10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1zm-5.45 8.16a1 1 0 0 0-.55.9V20H9v-.94a1 1 0 0 0-.55-.9A8 8 0 0 1 4.06 12h15.88a8 8 0 0 1-4.39 6.16zM9 9V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 7 3V2H5v1a4.53 4.53 0 0 0 1.28 3.17A2.49 2.49 0 0 1 7 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 11 3V2H9v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 11 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 15 3V2h-2v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 15 7.93V9z"></path>
                                </svg>
                                {{ ingredient.name }}
                            </span>
                        </router-link>
                    </li>
                </ul>
                <div class="ingredient__pagination">
                    <router-link
                        class="ingredient__btn-left"
                        :to="{
                            query: {
                                page: page.number - 1,
                            },
                        }"
                        :class="{ inactive: page.number === 1 }">
                        <svg
                            class="ingredient__btn-icon"
                            :class="{ inactive: page.number === 1 }"
                            xmlns="http://www.w3.org/2000/svg"
                            width="2.8rem"
                            height="2.8rem"
                            viewBox="0 0 24 24">
                            <path
                                d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path>
                        </svg>
                    </router-link>
                    <ul class="ingredient__pagination-list">
                        <li class="ingredient__pagination-item">
                            {{ page.number }} / {{ totalPages }}
                        </li>
                    </ul>
                    <router-link
                        class="ingredient__btn-right"
                        :class="{ inactive: page.number === totalPages }"
                        :to="{
                            query: {
                                page: page.number + 1,
                            },
                        }">
                        <svg
                            class="ingredient__btn-icon"
                            :class="{ inactive: page.number === totalPages }"
                            xmlns="http://www.w3.org/2000/svg"
                            width="2.8rem"
                            height="2.8rem"
                            viewBox="0 0 24 24">
                            <path
                                d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, reactive, watch } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';
import { useRoute } from 'vue-router';

const route = useRoute();
const storeRecipe = useStoreRecipe();

const page = reactive({
    number: computed(() => parseInt(route.query.page) || 1),
    size: 32,
});

const totalPages = computed(() => {
    return Math.ceil(storeRecipe.ingredientCount / page.size);
});

const loadIngredients = async () =>
    await storeRecipe.loadPaginatedIngredients(page.number, page.size);

watch(() => route.query.page, loadIngredients, { immediate: true });

// hooks
onMounted(async () => {
    await storeRecipe.loadIngredientsCount();
});
</script>

<style scoped lang="scss">
.section--ingredients {
    min-height: $h-section;
    @include bg;
    background-image: url('@img/decor/section/recipe-details/bg.jpg');
    padding-block: $spacing-common;
}

.ingredient {
    display: flex;
    flex-direction: column;
    margin-top: calc($spacing-fixed-header - $m-12);
    background-color: #ffffffda;
    margin-inline: auto;
    max-width: 78rem;
    min-height: 45.1731rem;
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
        margin-top: $m-10;
    }
    &__item {
        transition: $tr-smooth;
        border-radius: $br-4;
        background-color: #4a5f7212;
        &:hover {
            background-color: #4a5f7230;
        }
    }
    &__link {
        color: #4a5f72;
        padding-inline: $p-3;
        padding-block: $p-2;
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
    }
    &__pagination-item {
        font-size: $fs-h5;
    }
    &__btn-icon {
        fill: #4a5f72ad;
        transition: $tr-smooth;
        &:hover {
            fill: #4a5f72;
        }
    }
    &__btn-left,
    &__btn-right,
    &__btn-icon {
        &.inactive {
            fill: rgba(173, 173, 173, 0.746);
            pointer-events: none;
        }
    }
}
</style>
