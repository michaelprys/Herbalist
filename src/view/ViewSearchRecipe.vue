<template>
    <div class="section section--search">
        <div class="container">
            <label class="search__wrapper">
                <input
                    type="text"
                    class="search__input"
                    placeholder="Start typing a recipe name"
                    v-model="keyword"
                    @input="loadRecipesByKeyword" />
                <router-link class="search__icon-magnifier" to="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 24 24">
                        <path
                            d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                    </svg>
                </router-link>
            </label>

            <ul class="search__list" v-if="keyword !== ''">
                <li
                    v-for="result in recipe.slice(0, 5)"
                    :key="result.recipe_id">
                    <router-link
                        class="search__link"
                        :to="{
                            name: 'recipe-detail',
                            params: {
                                recipe: result.slug,
                            },
                        }">
                        <svg
                            class="search__icon-recipe"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path
                                d="m21.88 2.15-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a8.65 8.65 0 0 0 1.47 6.6c-.06.21-.12.42-.17.63A22.6 22.6 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41zm-7.27 13.93c-2.61 1.11-5.73.92-7.48-.45a13.79 13.79 0 0 1 1.21-2.84A10.17 10.17 0 0 1 9.73 11a9 9 0 0 1 1.81-1.42A12 12 0 0 1 16 8V7a11.43 11.43 0 0 0-5.26 1.08 10.28 10.28 0 0 0-4.12 3.65 15.07 15.07 0 0 0-1 1.87 7 7 0 0 1-.38-3.73 5.24 5.24 0 0 1 3.14-4 8.93 8.93 0 0 1 3.82-.84c.62 0 1.23.06 1.87.11a16.2 16.2 0 0 0 6-.35C20 7.55 19.5 14 14.61 16.08z"></path>
                        </svg>
                        <span>{{ result.title }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';

const keyword = ref('');

const storeRecipe = useStoreRecipe();

const recipe = computed(() => storeRecipe.recipeByKeyword);

const loadRecipesByKeyword = async () => {
    if (keyword.value) {
        await storeRecipe.loadRecipesByKeyword(keyword.value);
    }
};
</script>

<style lang="scss">
.section--search {
    min-height: $h-section;
    @include bg;
    @supports (
        background-image: url('@img/decor/section/recipe-details/bg.avif')
    ) {
        background-image: url('@img/decor/section/recipe-details/bg.avif');
    }
    background-image: url('@img/decor/section/recipe-details/bg.jpg');
    text-align: center;
    padding-block: $spacing-common;
    padding-top: calc($spacing-fixed-header + $p-32);
}

.search {
    &__wrapper {
        position: relative;
    }
    &__input {
        @include bar;
        font-weight: $fw-bold;
        &::placeholder {
            font-size: $fs-h4;
            font-weight: normal;
            color: rgba(255, 255, 255, 0.462);
            text-overflow: ellipsis;
        }
        &:focus {
            background-color: rgba($c-black, 0.85);
        }
    }
    &__icon-magnifier {
        position: absolute;
        fill: $c-white;
        opacity: $op-75;
        top: 50%;
        transform: translateY(-50%);
        right: 1rem;
        transition: $tr-smooth;
        &:hover {
            opacity: $op-100;
        }
    }
    &__list {
        max-width: 50rem;
        margin-inline: $auto;
        padding-block: $p-3_5;
        padding-inline: $p-5;
        font-size: $fs-h4;
        color: $c-white;
        transition: $tr-basic;
        background-color: rgba($c-grey-50, 0.95);
        padding: $p-0;
        margin-top: $m-1_5;
    }
    &__link {
        position: relative;
        font-size: $fs-h5;
        color: $c-grey-800;
        padding-inline: $p-6;
        padding-left: $p-14;
        padding-block: $p-2_5;
        border-bottom: $bw-px solid lighten($c-grey-800, 63%);
        transition: $tr-smooth;
        text-align: left;
        &:hover {
            background-color: lighten($c-grey-400, 60%);
        }
    }
    &__icon-recipe {
        top: $top-half;
        transform: $translateY-half-neg;
        left: 1rem;
        position: absolute;
        fill: $c-grey-200;
    }
}
</style>
