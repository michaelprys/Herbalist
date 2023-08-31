<template>
  <nav class="navbar">
    <div class="navbar__item">
      <router-link class="navbar__logo"
:to="{name: 'Home'}"
        ><img
          class="navbar__logo-image"
          src="@/assets/images/logo/header-logo.png"
          alt="Herbalist Logo"
          width="60"
        />
        <span class="navbar__logo-name">Herbalist</span>
      </router-link>
    </div>
    <!-- ./navbar logo item -->

    <div class="navbar__item">
      <ul class="navbar__menu">
        <li class="navbar__menu-item">
          <router-link
            class="navbar__menu-link navbar__menu-link--primary"
            :to="{name: 'searchRecipes'}"
            ><span>Search Recipes</span>
          </router-link>
        </li>
        <li class="navbar__menu-item">
          <router-link
            class="navbar__menu-link navbar__menu-link--primary"
            :to="{name: 'recipesByLetter'}"
            ><span>Recipes By Letter</span>
          </router-link>
        </li>
        <li class="navbar__menu-item">
          <router-link
            class="navbar__menu-link navbar__menu-link--primary"
            :to="{name: 'recipesByIngredients'}"
            ><span>Recipes By Ingredients</span>
          </router-link>
        </li>
      </ul>
      <!-- ./navbar links primary -->

      <ul class="navbar__menu">
        <li class="navbar__menu-item">
          <router-link
            class="navbar__menu-link navbar__menu-link--secondary"
            :to="{name: 'about'}"
          >
            About</router-link
          >
        </li>
        <li class="navbar__menu-item">
          <router-link
            class="navbar__menu-link navbar__menu-link--secondary"
            :to="{name: 'login'}"
            >Log In</router-link
          >
        </li>
      </ul>
      <!-- ./navbar links secondary -->
    </div>
    <!-- ./navbar menu item -->

    <div class="navbar__item navbar__item--burger">
      <label class="navbar__burger-inner">
        <input type="checkbox" />
      </label>
    </div>
    <!-- ./navbar burger-menu item -->
  </nav>
  <!-- ./navbar -->
</template>

<!-- -----------------------------  Script  ---------------------------- -->
<script setup></script>

<!-- -----------------------------  Style  ----------------------------- -->
<style lang="scss">
// * Navbar -------------------/
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  // ^ Navbar item -------------------/
  &__item {
    display: flex;
    flex-direction: column-reverse;
  }
  // ^ Navbar logo -------------------/
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
    transition: opacity 0.3s linear;
    &:hover {
      opacity: 1;
    }
  }

  // ^ Navbar menu -------------------/
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
    transition: $smooth-transition;
    & span {
      position: relative;
    }
    & span::after {
      content: "";
      position: absolute;
      padding-block: .0625rem;
      left: 0;
      right: 0;
      top: 2.9375rem;
      transition: $smooth-transition;
      opacity: 0;
      background-color: $white;
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
    background-image: linear-gradient(120deg, $pink, $pink);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 100% 0;
    transition:
      $smooth-transition,
      background-size 0.125s ease-in,
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
      transition: $smooth-transition;
      background-color: $pink;
    }
    &:hover {
      background-size: 100% 100%;
      opacity: 1;
      color: #000;
    }
  }

  // ^ Navbar burger -------------------/
  &__item--burger {
    display: none;
  }
  &__burger-inner {
    flex-direction: column;
    gap: $burger-gap;
    cursor: pointer;

    & input,
    &::before,
    &::after {
      content: "";
    width: $bar-width;
    height: $bar-height;
    background-color: $white;
    border-radius: 9999px;
    transform-origin: right center;
    transition:
      opacity $burger-animation,
      width $burger-animation,
      rotate $burger-animation,
      translate $burger-animation,
    }
    & input {
      -webkit-appearance: none;
      padding: 0;
      margin: 0;
      outline: none;
      pointer-events: none;
      transform-origin: left center;
      rotate: z -180deg;
      position: relative;
      left: 100%;
    }

    &:has(input:checked)::before {
      rotate: -45deg;
      width: $x-width;
      translate: 0 calc($bar-height / -2);
    }
    &:has(input:checked)::after {
      rotate: 45deg;
      width: $x-width;
      translate: 0 calc($bar-height / 2);
    }
    & input:checked {
        width: 0;
        opacity: 0;
    }
  }
}
// ./Navbar -------------------/

// * Media -------------------/
@media (max-width: 1279px) {
  .navbar {
    &__menu {
      display: none;
    }
    &__burger-inner {
      display: flex;
    }
    &__item--burger {
      display: flex;
    }
  }
}
</style>
