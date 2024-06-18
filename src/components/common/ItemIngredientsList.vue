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
                <IconSearch class="ingredients__search-icon" />
            </router-link>
        </label>
        <Transition name="fade" mode="out-in">
            <ul
                class="ingredients__list"
                v-if="filteredIngredients.length > 0"
                :key="page.number">
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
        </Transition>
    </div>
    <div class="ingredients__pagination" v-if="isVisible">
        <router-link
            class="ingredients__btn-left"
            :to="{
                name: 'ingredient',
                query: {
                    page: page.number - 1,
                },
            }"
            :class="{ inactive: page.number === 1 }">
            <IconPrev
                style="width: 3.5rem; height: 3.5rem"
                class="ingredients__btn-icon"
                :class="{ inactive: page.number === 1 }" />
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
            <IconNext
                style="width: 3.5rem; height: 3.5rem"
                class="ingredi ents__btn-icon"
                :class="{
                    inactive: page.number === totalPages,
                }" />
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { useStoreRecipe } from '@/stores/storeRecipe';
import { ref, computed } from 'vue';
import IconPrev from '@/components/icons/IconPrev.vue';
import IconNext from '@/components/icons/IconNext.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconMeal from '@/components/icons/IconMeal.vue';

const isVisible = ref(true);
const storeRecipe = useStoreRecipe();

const keyword = ref('');

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

const props = defineProps<{
    totalPages: number;
    page: {
        number: number;
    };
}>();
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
            grid-template-columns: repeat(1, 1fr);
        }
        &__item {
            font-size: 1rem;
        }
    }
}
</style>
