<template>
  <header class="header" :class="{ hidden: hideHeader }">
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
          :class="{ active: showMobileNav }"
          ref="navMenuRef">
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
          @click="toggleMobileNav"
          ref="navBurgerRef"
          type="button">
          <span class="nav__burger-item"></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
const showMobileNav = ref(false);
const navMenuRef = ref();
const navBurgerRef = ref();

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value;
};

const closeMobileNav = () => {
  showMobileNav.value = false;
};

onClickOutside(
  navMenuRef,
  () => {
    closeMobileNav();
  },
  { ignore: [navBurgerRef] }
);

// hide nav on scroll
const hideHeader = ref(false);

const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    hideHeader.value = true;
    console.log("scroll down");
  } else {
    hideHeader.value = false;
    console.log("scroll up");
  }
  lastScrollY = window.scrollY;
});
</script>

<style lang="scss">
// * Header -------------------/

.header {
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  margin-bottom: 100px;
  background-color: $c-grey-darkest;
  transform: translateY(0);
  transition: transform 0.4s;
  &.hidden {
    transform: translateY(-100%);
  }
}

// * nav -------------------/
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 7.8125rem;

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
    font-family: $ff-spectral;
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
    margin-right: 0;
  }
  &__menu-item:last-child &__menu-link--primary {
    padding-right: 0;
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
      top: 45px;
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
    padding-inline: 0.5625rem;

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
    gap: $burger-gap;
    z-index: 5;
    background: none;
    padding-block: 10px;
    padding-inline: 8px;
    border-radius: $br-rounded;
    &:hover {
      background-color: #6a6a6a42;
    }
    & span,
    &::before,
    &::after {
      content: "";
      width: $bar-width;
      height: $bar-height;
      border-radius: $br-full;
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
    &.active {
      transition: opacity $tr-smooth;
      position: fixed;
      right: 0;
      margin-right: 1.5rem;
    }
    &.active span {
      width: 0;
      opacity: 0;
    }
    &.active::before {
      width: $x-width;
      transform: translateX(-4px) translateY(calc($bar-height / -2))
        rotate(-45deg);
    }
    &.active::after {
      width: $x-width;
      transform: translateX(-4px) translateY(calc($bar-height / 2))
        rotate(45deg);
    }
  }
  // * Media -------------------/
}
@media (max-width: 1279px) {
  .nav {
    position: relative;
    &__item--burger {
      display: flex;
    }
    &__menu-link--primary,
    &__menu-link--secondary {
      display: none;
    }
    &__item--menus {
      flex-direction: column;
      position: fixed;
      left: 100%;
      top: 0;
      z-index: 2;
      height: 100%;
      min-width: 20rem;
      padding-top: calc($burger-height + $burger-margin + 4.1rem);
      font-size: 1.2rem;
      text-transform: uppercase;
      backdrop-filter: $blur;
      background-color: rgba(55, 55, 55, 0.97);
      transition: transform $tr-smooth, box-shadow $tr-smooth;
      &.active {
        box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.5);
        transform: translate(-100%);
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
