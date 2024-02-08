<template>
    <div class="section section--ingredients">
        <div class="container">
            <div class="ingredient">
                <h1 class="ingredient__title">List of Ingredients</h1>
                <ul class="ingredient__list">
                    <li
                        class="ingredient__item"
                        v-for="ingredient in storeRecipe.ingredients.slice(
                            0,
                            32
                        )"
                        :key="ingredient.recipe_id">
                        <router-link to="/">
                            <span class="ingredient__link">
                                {{ ingredient.name }}
                            </span>
                        </router-link>
                    </li>
                </ul>
                <div class="ingredient__pagination">
                    <div class="ingredient__btn-left">
                        <router-link to="/">
                            <svg
                                class="ingredient__btn-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="2.8rem"
                                height="2.8rem"
                                viewBox="0 0 24 24">
                                <path
                                    d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path>
                            </svg>
                        </router-link>
                    </div>
                    <div class="ingredient__btn-right">
                        <router-link to="/">
                            <svg
                                class="ingredient__btn-icon"
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
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';

const storeRecipe = useStoreRecipe();

// hooks
onMounted(async () => {
    await storeRecipe.loadIngredients();
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
        margin-top: $m-10;
    }
    &__item {
        transition: $tr-smooth;
        padding-inline: $p-3;
        padding-block: $p-2;
        border-radius: $br-2;
        &:hover {
            background-color: #4a5f722a;
        }
    }
    &__link {
        color: #4a5f72;
    }
    &__pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: $m-10;
    }
    &__btn-icon {
        fill: #4a5f7280;
        transition: $tr-smooth;
        &:hover {
            fill: #4a5f72da;
        }
    }
}
</style>
