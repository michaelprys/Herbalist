<template>
  <nav class="drawer">
    <router-link to="/" class="drawer__link">Home</router-link>
    <router-link :to="{ name: 'searchRecipes' }" class="drawer__link"
      >Search Recipes</router-link
    >
    <router-link :to="{ name: 'recipesByLetter' }" class="drawer__link"
      >Recipes By Letter</router-link
    >
    <router-link :to="{ name: 'recipesByIngredients' }" class="drawer__link"
      >Recipes By Ingredients</router-link
    >
    <router-link :to="{ name: 'about' }" class="drawer__link">
      About</router-link
    >
    <router-link :to="{ name: 'login' }" class="drawer__link"
      >Log In</router-link
    >
  </nav>
</template>

<script setup></script>

<style lang="scss">
.drawer {
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
  &__link {
    padding-inline: 1.6rem;
    padding-block: 0.9rem;
    opacity: 0.7;
    transition: background-color $tr-smooth, opacity $tr-smooth;
    cursor: pointer;
    &:hover {
      background-color: #6a6a6a;
      opacity: 1;
    }
  }
}

@media (width >= $screen-xl) {
  .drawer {
    display: none;
  }
}

@media (width <= $screen-sm) {
  .drawer {
    min-width: 100%;
    font-size: 1.3rem;
  }
}
</style>
