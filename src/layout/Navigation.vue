<template>
  <div class="container container--nav">
    <nav class="nav">
      <div class="nav__item">
        <router-link class="nav__logo" :to="{ name: 'Home' }"
          ><img
            class="nav__logo-image"
            src="@/assets/images/logo/header-logo.png"
            alt="Herbalist Logo"
            width="60" />
          <span class="nav__logo-name">Herbalist</span>
        </router-link>
      </div>
      <!-- ./nav logo item -->

      <div
        class="nav__item nav__item--menus"
        :class="{ active: showMobileNav }">
        <ul class="nav__menu">
          <li class="nav__menu-item">
            <router-link
              class="nav__menu-link nav__menu-link--primary"
              :to="{ name: 'searchRecipes' }"
              ><span>Search Recipes</span>
            </router-link>
          </li>
          <li class="nav__menu-item">
            <router-link
              class="nav__menu-link nav__menu-link--primary"
              :to="{ name: 'recipesByLetter' }"
              ><span>Recipes By Letter</span>
            </router-link>
          </li>
          <li class="nav__menu-item">
            <router-link
              class="nav__menu-link nav__menu-link--primary"
              :to="{ name: 'recipesByIngredients' }"
              ><span>Recipes By Ingredients</span>
            </router-link>
          </li>
        </ul>
        <!-- ./nav links primary -->

        <ul class="nav__menu">
          <li class="nav__menu-item">
            <router-link
              class="nav__menu-link nav__menu-link--secondary"
              :to="{ name: 'about' }">
              About</router-link
            >
          </li>
          <li class="nav__menu-item">
            <router-link
              class="nav__menu-link nav__menu-link--secondary"
              :to="{ name: 'login' }"
              >Log In</router-link
            >
          </li>
        </ul>
        <!-- ./nav links secondary -->
      </div>
      <!-- ./nav menus item -->

      <button
        class="nav__item nav__item--burger"
        :class="{ active: showMobileNav }"
        @click="showMobileNav = !showMobileNav"
        type="button">
        <span class="nav__burger-item"></span>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showMobileNav = ref(false);
</script>

<style lang="scss">
// * nav -------------------/
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  // ^ nav item -------------------/
  &__item {
    display: flex;
    flex-direction: column-reverse;
  }
  // ^ nav logo -------------------/
  &__logo {
    display: flex;
    align-items: center;
    transform: translateX(-4px);
    font-family: $spectral;
  }
  &__logo-image {
    transition: transform 0.9s ease-in-out;
    &:hover {
      transform: rotate(360deg);
    }
  }
  &__logo-name {
    margin-left: 0.4375rem;
    font-size: 1.0625rem;
    opacity: 70%;
    transition: opacity 0.3s linear;
    &:hover {
      opacity: 1;
    }
  }

  // ^ nav menu -------------------/
  &__menu {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  &__menu-item:last-child &__menu-link {
    padding-right: 0;
    margin-right: 0;
  }

  &__menu-link {
    &:hover {
      opacity: 1;
    }
  }

  &__menu-link--primary {
    display: block;
    padding-bottom: 1rem;
    padding-inline: 1rem;
    font-size: 1.1875rem;
    text-transform: uppercase;
    opacity: 0.7;
    transition: opacity $tr-smooth;
    & span {
      position: relative;
    }
    & span::after {
      content: "";
      position: absolute;
      padding-block: 0.0625rem;
      left: 0;
      right: 0;
      top: 2.6875rem;
      transition: opacity $tr-smooth;
      opacity: 0;
      background-color: $c-white;
    }
    &:hover span::after {
      opacity: 1;
    }
  }

  &__menu-link--secondary {
    display: block;
    position: relative;
    margin-inline: 1.5rem;
    font-size: 1.125rem;
    text-transform: uppercase;
    background-image: linear-gradient(120deg, $c-pink, $c-pink);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 100% 0;
    transition: opacity $tr-smooth, background-size 0.125s ease-in,
      color 0.3s linear;
    opacity: 0.7;

    &::after {
      content: "";
      position: absolute;
      min-width: 100%;
      padding-block: 0.5008px;
      left: 50%;
      top: 93%;
      transform: translateX(-50%);
      transition: opacity $tr-smooth;
      background-color: $c-pink;
    }
    &:hover {
      background-size: 100% 100%;
      opacity: 1;
      color: $c-black;
    }
  }
  // ^ hamburger menu -------------------/
  &__item--burger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    gap: $burger-gap;
    z-index: 5;
    background: none;
    padding-block: 15px;
    & span,
    &::before,
    &::after {
      content: "";
      width: $bar-width;
      height: $bar-height;
      border-radius: 9999px;
      transform-origin: right center;
      background-color: $c-white;
      transition: $tr-smooth;
    }
    & span {
      transform-origin: left center;
      rotate: z -180deg;
      position: relative;
      left: 100%;
    }
    &.active span {
      width: 0;
      opacity: 0;
    }
    &.active::before {
      width: $x-width;
      transform: translateY(calc($bar-height / -2)) rotate(-45deg);
    }
    &.active::after {
      width: $x-width;
      transform: translateY(calc($bar-height / 2)) rotate(45deg);
    }
  }
  // * Media -------------------/
}
@media (max-width: 1279px) {
  .nav {
    &__item--burger {
      display: flex;
    }
    &__menu-link--primary,
    &__menu-link--secondary {
      display: none;
    }
    &__item--menus {
      flex-direction: column;
      position: absolute;
      right: -20rem;
      top: 0;
      z-index: 2;
      min-height: 100vh;
      min-width: 20rem;
      padding-top: calc($burger-height + $burger-margin + 4.1rem);
      font-size: 1.2rem;
      text-transform: uppercase;
      background-color: $c-light-grey;
      transition: right $tr-smooth;
      &.active {
        right: 0;
      }
    }
    &__menu {
      flex-direction: column;
      margin: 0;
      padding: 0;
    }
    &__menu-link--primary,
    &__menu-link--secondary {
      all: unset;
      display: flex;
      padding-inline: 1.6rem;
      padding-block: 0.9rem;
      opacity: 0.7;
      transition: background-color $tr-smooth, opacity $tr-smooth;
      cursor: pointer;
      &::after {
        display: none;
      }
      & span::after {
        display: none;
      }
      &:hover {
        color: inherit;
        background-color: #6a6a6a;
        opacity: 1;
      }
    }
  }
}
</style>
