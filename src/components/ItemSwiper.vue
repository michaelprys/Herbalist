<template>
  <Swiper
    class="swiper"
    :breakpoints="swiperOptions.breakpoints"
    :pagination="{
      clickable: true,
    }"
    :loop="true"
    :modules="swiperOptions.modules">
    <template v-for="recipe in storeRecipes.data" :key="recipe.id">
      <SwiperSlide class="swiper__slide">
        <ItemCard :data="recipe" />
      </SwiperSlide>
      <div class="swiper-custom-pagination"></div>
    </template>
  </Swiper>
</template>

<script setup>
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import { useStoreRecipes } from "@/stores/recipes/storeRecipes.js";
import ItemCard from "@/components/ItemCard.vue";

const storeRecipes = useStoreRecipes();

const swiperOptions = {
  modules: [Pagination],
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1040: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
};

onMounted(() => {
  storeRecipes.loadRecipes();
});
</script>

<!-- style -->

<style lang="scss">
.swiper {
  margin-bottom: 12.5rem;
}
.swiper-custom-pagination {
  color: $c-white;
  text-align: center;
  padding-top: 0.4rem;
}
.swiper-pagination-bullet {
  padding: 0.5rem;
  background-color: $c-white;
  opacity: 0.4;
}

.swiper-pagination-bullet-active {
  background-color: $c-white;
  opacity: 1;
}
</style>
