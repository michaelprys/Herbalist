<template>
    <Splide :options="options" :has-track="false">
        <SplideTrack>
            <SplideSlide
                v-for="recipe in storeRecipe.popularRecipes"
                :key="recipe.recipe_id">
                <ItemCard :recipe="recipe" :pending="storeRecipe.pending" />
            </SplideSlide>
        </SplideTrack>
        <div class="splide__pagination">
            <div class="splide__pagination__page is-active" />
        </div>
    </Splide>
</template>

<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import { onMounted, watch } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';
import ItemCard from '@/component/ItemCard.vue';
// import { useRoute } from 'vue-router';

// const route = useRoute();

const storeRecipe = useStoreRecipe();

// slider setup
const options = {
    arrows: false,
    flickPower: 300,
    gap: '2.5rem',
    easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
    mediaQuery: 'min',
    lazyLoad: 'sequential',
    breakpoints: {
        320: {
            perPage: 1,
        },
        801: {
            perPage: 2,
        },
        1280: {
            perPage: 3,
        },
    },
};

// watch(
//     () => route(newRoute),
//     async newRoute => {
//         await storeRecipe.loadPopularRecipes(newRoute);
//     },
//     { immediate: true }
// );

onMounted(async () => {
    await storeRecipe.loadPopularRecipes();
});
</script>

<style lang="scss">
@import '@splidejs/vue-splide/css/core';

.splide__pagination {
    padding-top: $p-6;
}

.splide__pagination__page {
    margin-right: $m-2_5;
    padding: $p-3;
    border-radius: $br-full;
    background-color: $c-white;
    opacity: $op-30;
    transition: $tr-smooth;
    &:hover {
        opacity: $op-40;
    }
    &.is-active {
        opacity: $op-80;
    }
}
</style>
