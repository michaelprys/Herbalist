<template>
    <div class="carousel">
        <Splide :options="options" :has-track="false">
            <SplideTrack>
                <SplideSlide
                    v-for="recipe in storeRecipe.popularRecipes"
                    :key="recipe.recipe_id">
                    <ItemCard :recipe="recipe" :pending="storeRecipe.pending" />
                </SplideSlide>
            </SplideTrack>
            <div class="carousel__pagination"></div>
        </Splide>
    </div>
</template>

<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import { onMounted } from 'vue';
import { useStoreRecipe } from '@/stores/storeRecipe';
import ItemCard from '@/components/common/ItemCard.vue';

const storeRecipe = useStoreRecipe();

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

onMounted(async () => {
    await storeRecipe.loadPopularRecipes();
});
</script>

<style lang="scss">
@import '@splidejs/vue-splide/css/core';

.carousel {
    margin-top: $m-6;
    &__pagination {
        padding-top: $p-6;
    }
}
.splide__pagination__page {
    margin-right: $m-2_5;
    padding: $p-3;
    border-radius: $br-full;
    background-color: $c-white;
    opacity: $op-30;
    transition: opacity $tr-smooth;
    &:hover {
        opacity: $op-40;
    }
    &.is-active {
        opacity: $op-80;
    }
}

@media (width <= $screen-md) {
    .splide__track {
        max-width: 26rem;
        margin-inline: auto;
    }
}
</style>
