<template>
  <section class="recipes">
    <h1 class="recipes__title">Popular</h1>
    <SwiperComponent></SwiperComponent>
  </section>
</template>

<!-- script -->

<script setup>
import SwiperComponent from "@/components/Swiper.vue";
</script>

<!-- style -->

<style lang="scss">
.recipes {
  max-width: 71.6875rem;
  margin-inline: auto;
  &__title {
    margin-top: 3.125rem;
    font-size: 3rem;
    text-shadow: 8px 8px 18px $c-black;
  }
}
</style>
