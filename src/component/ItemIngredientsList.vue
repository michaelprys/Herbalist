<template>
    <div class="ingredient-list">
        <h1 class="ingredient-list__title">List of ingredients</h1>
        <ul class="ingredient-list__list">
            <li
                class="ingredient-list__item"
                v-for="ingredient in storeRecipe.paginatedIngredients"
                :key="ingredient.ingredient_id">
                <router-link
                    class="ingredient-list__link"
                    :to="{
                        name: 'ingredientRecipes',
                        params: { ingredient: ingredient.slug },
                    }">
                    <span class="ingredient-list__wrapper">
                        <svg
                            class="ingredient-list__icon"
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
    </div>
    <div class="ingredient-list__pagination">
        <router-link
            class="ingredient-list__btn-left"
            :to="{
                name: 'ingredient',
                query: {
                    page: page.number - 1,
                },
            }"
            :class="{ inactive: page.number === 1 }">
            <svg
                class="ingredient-list__btn-icon"
                :class="{ inactive: page.number === 1 }"
                xmlns="http://www.w3.org/2000/svg"
                width="2.8rem"
                height="2.8rem"
                viewBox="0 0 24 24">
                <path
                    d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path>
            </svg>
        </router-link>
        <ul class="ingredient-list__pagination-list">
            <li class="ingredient-list__pagination-item">
                {{ page.number }} / {{ totalPages }}
            </li>
        </ul>
        <router-link
            class="ingredient-list__btn-right"
            :class="{ inactive: page.number === totalPages }"
            :to="{
                name: 'ingredient',
                query: {
                    page: page.number + 1,
                },
            }">
            <svg
                class="ingredient-list__btn-icon"
                :class="{
                    inactive: page.number === totalPages,
                }"
                xmlns="http://www.w3.org/2000/svg"
                width="2.8rem"
                height="2.8rem"
                viewBox="0 0 24 24">
                <path
                    d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
            </svg>
        </router-link>
    </div>
</template>

<script setup>
import { useStoreRecipe } from '@/store/storeRecipe';
const storeRecipe = useStoreRecipe();

const props = defineProps(['totalPages', 'page']);
</script>

<style lang="scss"></style>
