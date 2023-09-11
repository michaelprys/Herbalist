<template>
  <div class="container">
    <section class="section section--recipes">
      <h2 class="section__title">Popular recipes</h2>
      <ItemSwiper></ItemSwiper>
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
  margin-top: 3.125rem;
  &__title {
    text-shadow: $fx-shadow-dark;
    font-size: 3rem;
  }
}
</style>
