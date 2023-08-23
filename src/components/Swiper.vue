<template>
  <Swiper :slidesPerView="3" :spaceBetween="30">
    <template v-for="recipe in storeRecipes.data" :key="recipe.id">
      <SwiperSlide>
        <Card :data="recipe" />
      </SwiperSlide>
    </template>
  </Swiper>
</template>

<!-- script -->

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import Card from "@/components/Card.vue";
import "swiper/css";
import { useStoreRecipes } from "@/stores/recipes/storeRecipes.js";
import { onMounted } from "vue";

const storeRecipes = useStoreRecipes();
onMounted(async () => await storeRecipes.loadRecipes());
</script>

<!-- style -->

<style lang="scss">
.swiper-custom-pagination {
  color: $white;
  text-align: center;
  padding-top: 1.25rem;
}
.swiper-pagination-bullet {
  padding: 0.5rem;
  background-color: $white;
  opacity: 0.4;
}

.swiper-pagination-bullet-active {
  background-color: $white;
  opacity: 1;
}

.swiper-button-left,
.swiper-button-right {
  color: black;
  padding: 20px;
}
</style>
