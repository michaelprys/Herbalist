<template>
  <div class="container">
    <section class="section section--recipes">
      <h1 class="section__title">Popular recipes</h1>
      <div class="container container--swiper">
        <ItemSwiper></ItemSwiper>
      </div>
    </section>
  </div>
</template>

<script setup>
import ItemSwiper from "@/components/ItemSwiper.vue";
</script>

<style lang="scss">
.section {
  max-width: 71.6875rem;
  margin-inline: auto;
  margin-block: 3.125rem;
  &__title {
    text-shadow: $fx-shadow-dark;
    font-size: 3rem;
  }
}
</style>
