<template>
  <section class="drawer" ref="drawerRefProp">
    <div class="drawer__overlay" :class="{ active: showDrawerProp }"></div>
    <nav class="drawer__wrapper" :class="{ active: showDrawerProp }">
      <ul class="drawer__list">
        <li>
          <router-link
            to="/"
            class="drawer__link"
            active-class="drawer__active-link"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'searchRecipes' }"
            class="drawer__link"
            active-class="drawer__active-link"
            >Search Recipes</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'recipesByLetter' }"
            class="drawer__link"
            active-class="drawer__active-link"
            >Recipes By Letter</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'recipesByIngredients' }"
            class="drawer__link"
            active-class="drawer__active-link"
            >Recipes By Ingredients</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'about' }"
            class="drawer__link"
            active-class="drawer__active-link">
            About</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'login' }"
            class="drawer__link"
            active-class="drawer__active-link"
            >Log In</router-link
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup>
const props = defineProps([
  "showDrawerProp",
  // "drawerRefProp",
  // "drawerOverlayRefProp",
]);
</script>

<style lang="scss">
.drawer {
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    opacity: 0;
    transition: opacity $tr-smooth;
    will-change: opacity;
    background-color: rgba($c-black, 0.5);
    &.active {
      opacity: 1;
    }
  }
  &__wrapper {
    display: none;
    position: fixed;
    z-index: 12;
    display: flex;
    flex-direction: column;
    left: 100%;
    top: 0;
    min-width: 20rem;
    height: 100vh;
    padding-top: calc($burger-height + $burger-margin + 4.1rem);
    font-size: 1.2rem;
    text-transform: uppercase;
    backdrop-filter: $blur-hard;
    background-color: rgba(#272727, 0.97);
    transition: transform $tr-smooth;
    &.active {
      transform: translate(-100%);
    }
  }
  &__link {
    padding-inline: 1.6rem;
    padding-block: 0.9rem;
    opacity: 0.7;
    transition: background-color $tr-smooth, opacity $tr-smooth;
    cursor: pointer;
    &:hover {
      background-color: rgba($c-grey-hover, 0.5);
      opacity: 1;
    }
  }
  &__active-link {
    opacity: 1;
    background-color: rgba($c-grey-hover, 0.5);
    &:hover {
      background-color: rgba($c-grey-hover, 1);
      opacity: 1;
    }
  }
}

@media (width <= $screen-sm) {
  .drawer__wrapper {
    min-width: 100%;
    font-size: 1.3rem;
  }
}
</style>
