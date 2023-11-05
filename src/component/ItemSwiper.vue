<template>
    <Swiper
        class="swiper"
        :breakpoints="swiperOptions.breakpoints"
        :pagination="{
            clickable: true,
        }"
        :loop="true"
        :modules="swiperOptions.modules">
        <template v-for="recipe in data" :key="recipe.id">
            <SwiperSlide class="swiper__slide">
                <ItemCard :data="recipe" :pending="pending" />
            </SwiperSlide>
            <div class="swiper-custom-pagination"></div>
        </template>
    </Swiper>
</template>

<script setup>
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { useStoreRecipe } from '@/store/storeRecipe';
import { storeToRefs } from 'pinia';

import ItemCard from '@/component/ItemCard.vue';

const storeRecipe = useStoreRecipe();
const { data, pending } = storeToRefs(storeRecipe);

// swiper options
const swiperOptions = {
    modules: [Pagination],
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
        1040: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
};

onMounted(async () => {
    await storeRecipe.loadRecipes();
});
</script>

<style lang="scss">
.swiper-custom-pagination {
    color: $c-white;
    text-align: center;
    padding-top: $p-2;
}
.swiper-pagination-bullet {
    padding: $p-2_5;
    background-color: $c-white;
    opacity: $op-40;
}

.swiper-pagination-bullet-active {
    background-color: $c-white;
    opacity: $op-100;
}

@media (width <= $screen-md) {
    .swiper {
        margin-inline: $auto;
        max-width: 22.5rem;
    }
}
</style>
