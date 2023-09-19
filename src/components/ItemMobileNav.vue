<template>
  <nav class="mobile-nav">
    <a class="mobile-nav__link" href="#">Search Recipes</a>
    <a class="mobile-nav__link" href="#">Recipes By Letter</a>
    <a class="mobile-nav__link" href="#">Recipes By Ingredients</a>
    <a class="mobile-nav__link" href="#">About</a>
    <a class="mobile-nav__link" href="#">Log In</a>
  </nav>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss">
.mobile-nav {
  position: fixed;
  z-index: 5;
  right: 0;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  left: 100%;
  top: 0;
  height: 100%;
  min-width: 20rem;
  padding-top: calc($burger-height + $burger-margin + 4.1rem);
  font-size: 1.2rem;
  text-transform: uppercase;
  backdrop-filter: $blur-hard;
  background-color: rgba(55, 55, 55, 0.97);
  transition: transform $tr-smooth, box-shadow $tr-smooth;
  &.active {
    box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.5);
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
</style>
