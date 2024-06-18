<template>
    <div class="container">
        <Swiper class="swiper" v-bind="swiperOptions">
            <SwiperSlide
                class="swiper__slide"
                v-for="recipe in storeRecipe.popularRecipes"
                :key="recipe.recipe_id">
                <ItemCard :recipe="recipe" :pending="storeRecipe.pending" />
            </SwiperSlide>
            <div class="swiper-custom-pagination"></div>
        </Swiper>
    </div>
</template>

<script setup lang="ts">
import 'swiper/css/pagination';
import 'swiper/css';
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { useStoreRecipe } from '@/stores/storeRecipe';

import ItemCard from '@/components/common/ItemCard.vue';

const storeRecipe = useStoreRecipe();

const swiperOptions = {
    modules: [Pagination],
    pagination: {
        clickable: true,
    },
    loop: true,
    breakpoints: {
        // screen xs
        320: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        // screen md
        801: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        // screen lg
        1280: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
};

onMounted(async () => {
    await storeRecipe.loadPopularRecipes();
});
</script>

<style lang="scss">
.swiper-custom-pagination {
    margin-top: 64px;
}

.swiper-pagination {
    width: 100%;
}

.swiper-pagination-bullet {
    padding: $p-2_5;
    background-color: $c-white;
    opacity: $op-40;
    margin: 0 0.25rem 0.5rem;
    margin-top: 1.8125rem;
}

.swiper-pagination-bullet-active {
    background-color: $c-white;
    opacity: $op-100;
}
</style>
