<template>
    <div class="search">
        <label class="search-wrapper">
            <input
                type="text"
                class="search__input"
                placeholder="Start typing a recipe name"
                v-model="keyword"
                @input="loadRecipes" />
            <!-- TODO: add search button -->
            <!-- <button class="search__button"></button> -->
        </label>

        <ul class="search__list">
            <li v-for="result of recipe" :key="result.id">
                <router-link
                    class="search__suggestion"
                    :to="{ name: 'recipeDetail', params: 'recipe: result.id' }">
                    <svg
                        class="search__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="M21 10H3a1 1 0 0 0-1 1 10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1zm-5.45 8.16a1 1 0 0 0-.55.9V20H9v-.94a1 1 0 0 0-.55-.9A8 8 0 0 1 4.06 12h15.88a8 8 0 0 1-4.39 6.16zM9 9V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 7 3V2H5v1a4.53 4.53 0 0 0 1.28 3.17A2.49 2.49 0 0 1 7 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 11 3V2H9v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 11 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 15 3V2h-2v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 15 7.93V9z"></path>
                    </svg>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';

const keyword = ref('');

const storeRecipe = useStoreRecipe();

const recipe = computed(() => storeRecipe.data);

const loadRecipes = async () => {
    if (keyword.value) {
        await storeRecipe.loadRecipes(keyword.value);
    }
};
</script>

<style lang="scss">
.search-wrapper {
    position: relative;
}
.search {
    margin-top: $m-32;
    &__input {
        @include bar;

        font-weight: $fw-bold;
        &::placeholder {
            font-size: $fs-h3;
            font-weight: normal;
            color: rgba(255, 255, 255, 0.462);
        }
        &:focus {
            background-color: rgba($c-black, 0.85);
        }
    }
    &__button {
        background: $none;
    }
    &__list {
        @include bar;
        border: $none;
        background-color: rgba($c-grey-50, 0.95);
        padding: $p-0;
        margin-top: $m-1_5;
    }
    &__suggestion {
        position: relative;
        font-size: $fs-h5;
        color: $c-grey-800;
        padding-inline: $p-6;
        padding-left: $p-14;
        padding-block: $p-2_5;
        border-bottom: $bw-px solid lighten($c-grey-800, 63%);
        transition: $tr-smooth;
        &:hover {
            background-color: lighten($c-grey-400, 60%);
        }
    }
    &__icon {
        top: $top-half;
        transform: $translateY-half-neg;
        left: 1rem;
        position: absolute;
        fill: $c-grey-200;
    }
}
</style>
