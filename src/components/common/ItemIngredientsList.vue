<template>
    <div class="ingredients">
        <h1 class="ingredients__title">List of ingredients</h1>
        <label class="ingredients__search">
            <input
                type="text"
                class="ingredients__input"
                placeholder="Search for an ingredient"
                v-model="keyword"
                @input="loadIngredientsByKeyword" />
            <router-link class="ingredients__search-link" to="/">
                <svg
                    class="ingredients__search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24">
                    <path
                        d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                </svg>
            </router-link>
        </label>
        <ul class="ingredients__list" v-if="filteredIngredients.length > 0">
            <li
                class="ingredients__item"
                v-for="ingredient in filteredIngredients"
                :key="ingredient.ingredient_id">
                <router-link
                    class="ingredients__link"
                    :to="{
                        name: 'ingredientRecipes',
                        params: { ingredientName: ingredient.name },
                    }">
                    <span class="ingredients__wrapper">
                        <IconMeal class="ingredients__icon" />
                        {{ ingredient.name }}
                    </span>
                </router-link>
            </li>
        </ul>

        <p class="ingredients__not-found" v-else>No ingredients found.</p>
    </div>
    <div class="ingredients__pagination">
        <router-link
            class="ingredients__btn-left"
            :to="{
                name: 'ingredient',
                query: {
                    page: page.number - 1,
                },
            }"
            :class="{ inactive: page.number === 1 }">
            <svg
                class="ingredients__btn-icon"
                :class="{ inactive: page.number === 1 }"
                xmlns="http://www.w3.org/2000/svg"
                width="2.8rem"
                height="2.8rem"
                viewBox="0 0 24 24">
                <path
                    d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path>
            </svg>
        </router-link>
        <ul class="ingredients__pagination-list">
            <li class="ingredient-list__pagination-item">
                {{ page.number }} / {{ totalPages }}
            </li>
        </ul>
        <router-link
            class="ingredients__btn-right"
            :class="{ inactive: page.number === totalPages }"
            :to="{
                name: 'ingredient',
                query: {
                    page: page.number + 1,
                },
            }">
            <svg
                class="ingredients__btn-icon"
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
import { useStoreRecipe } from '@/stores/storeRecipe';
import { ref, computed } from 'vue';
import IconMeal from '@/components/icons/IconMeal.vue';
const storeRecipe = useStoreRecipe();

const keyword = ref('');

const ingredient = computed(() => storeRecipe.ingredientByKeyword);

const loadIngredientsByKeyword = async () => {
    if (keyword.value) {
        await storeRecipe.loadIngredientsByKeyword(keyword.value);
    }
};

const filteredIngredients = computed(() => {
    if (!keyword.value) {
        return storeRecipe.paginatedIngredients;
    }
    return storeRecipe.paginatedIngredients.filter(ingredient =>
        ingredient.name.toLowerCase().includes(keyword.value.toLowerCase())
    );
});

const props = defineProps(['totalPages', 'page']);
</script>

<style scoped lang="scss">
.ingredients {
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
        background-color: #4a5f7212;
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
    &__btn-icon {
        fill: #4a5f72ad;
        transition: fill $tr-smooth;
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

@media (width <= 80rem) {
    .ingredients {
        &__list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media (width <= $screen-sm) {
    .ingredients {
        &__title {
            font-size: $fs-h3;
        }
        &__list {
            grid-template-columns: repeat(2, 1fr);
        }
        &__item {
            font-size: 1rem;
        }
    }
}
@media (width <= 40rem) {
    .ingredients {
        &__list {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
