<template>
    <Splide class="splide__track" :options="options" :has-track="false">
        <SplideTrack>
            <SplideSlide
                class="splide__slide"
                v-for="recipe in storeRecipe.data"
                :key="recipe.id">
                <ItemCard :data="recipe" :pending="storeRecipe.pending" />
            </SplideSlide>
        </SplideTrack>
        <div class="splide__pagination">
            <div class="splide__pagination__page is-active" />
        </div>
    </Splide>
</template>

<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import { ref, onMounted } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';
import ItemCard from '@/component/ItemCard.vue';

const storeRecipe = useStoreRecipe();

// slider setup
const options = {
    arrows: false,
    flickPower: 300,
    gap: '2.5rem',
    easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
    mediaQuery: 'min',
    breakpoints: {
        320: {
            perPage: 1,
        },
        801: {
            perPage: 2,
        },
        1040: {
            perPage: 3,
        },
    },
};

// hooks
onMounted(async () => {
    await storeRecipe.loadRecipes();
});
</script>

<style lang="scss">
@import '@splidejs/vue-splide/css/core';

.splide__track {
    padding-inline: 1rem;
    margin-inline: auto;
}

.splide__pagination {
    margin-top: $p-4;
}

.splide__pagination__page {
    margin-right: $m-2_5;
    padding: $p-2_5;
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

@media (width <= $screen-md) {
    .splide__track {
        max-width: 26rem;
    }
}
</style>
