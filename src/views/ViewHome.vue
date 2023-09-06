<template>
  <!-- <section class="section section--intro">
    <div class="section__image--intro">
      <h1 class="section__title--intro">Organic</h1>
    </div>
  </section> -->
  <div class="container">
    <section class="section section--recipes">
      <h2 class="section__title">Popular recipes</h2>
      <SwiperComponent></SwiperComponent>
    </section>
  </div>
</template>

<!-- script -->

<script setup>
import SwiperComponent from "@/components/Swiper.vue";
</script>

<!-- style -->

<style lang="scss">
.section {
  // scroll-snap-align: start;
  max-width: 71.6875rem;
  margin-inline: auto;
  margin-top: 3.125rem;
  &__title,
  &__title--intro {
    text-shadow: $fx-shadow-basic;
  }
  &__title {
    font-size: 3rem;
  }
  &__title--intro {
    font-size: 5rem;
    font-family: $vegan;
    background-attachment: fixed;
  }

  &--intro {
    min-width: 100%;
    margin-top: 0;
  }
  &__image--intro {
    background-color: $c-grey-hard;
    // background-image: url("src/assets/images/section/intro.jpg");
    background-attachment: fixed;
    background-size: cover;
    filter: grayscale(80%);
    min-height: 310px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
