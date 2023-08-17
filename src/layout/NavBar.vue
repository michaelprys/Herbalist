<template>
  <nav class="navbar">
    <div class="navbar__item">
      <router-link class="navbar__logo" to="/"
        ><img
          class="navbar__logo-img"
          src="@/assets/images/logo/header-logo.png"
          alt="Herbalist Logo"
          width="60"
        />
        <span class="navbar__logo-text">Herbalist</span>
      </router-link>
    </div>
    <!-- ./navbar logo -->

    <div class="navbar__item">
      <ul class="navbar__links">
        <li>
          <router-link
            class="navbar__link navbar__link--primary"
            to="/searchRecipes"
            >Search Recipes</router-link
          >
        </li>
        <li>
          <router-link
            class="navbar__link navbar__link--primary"
            to="/recipesByLetter"
            >Recipes By Letter</router-link
          >
        </li>
        <li>
          <router-link
            class="navbar__link navbar__link--primary"
            to="/recipesByIngredients"
            >Recipes By Ingredients</router-link
          >
        </li>
      </ul>
      <!-- ./navbar links primary -->

      <ul class="navbar__links">
        <li>
          <router-link class="navbar__link navbar__link--secondary" to="/about"
            >About</router-link
          >
        </li>
        <li>
          <router-link class="navbar__link navbar__link--secondary" to="/login"
            >Log In</router-link
          >
        </li>
      </ul>
      <!-- ./navbar links secondary -->
    </div>
    <!-- ./navbar links -->

    <div class="navbar__item navbar__item--burger">
      <label class="navbar__burger-inner">
        <input type="checkbox" />
      </label>
    </div>
    <!-- ./navbar burger menu -->
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
  }
  &__logo-img {
    transition: transform 0.9s ease-in-out;
    &:hover {
      transform: rotate(360deg);
    }
  }
  &__logo-text {
    margin-left: 0.4375rem;
    opacity: 70%;
    transition: opacity 0.3s linear;
    &:hover {
      opacity: 1;
    }
  }

  // ^ Navbar links -------------------/
  &__links {
    display: flex;
    justify-content: end;
    margin-top: 1.25rem;
  }

  // ^ Navbar link primary -------------------/
  &__link--primary {
    position: relative;
    text-transform: uppercase;
    display: block;
    padding-bottom: 1.5rem;
    padding-inline: 1.5rem;
    font-size: 1.125rem;
    opacity: 70%;
    &::after {
      content: "";
      position: absolute;
      min-width: $fit-size;
      padding-block: 0.0625rem;
      background-color: $white;
      transform: translateX(-50%);
      left: 50%;
      top: 99%;
      opacity: 0;
      transition: $smooth-transition;
    }
    transition: $smooth-transition;
    &:hover::after {
      opacity: 1;
    }
    &:hover {
      opacity: 1;
    }
  }

  // ^ Navbar link secondary -------------------/
  &__link--secondary {
    position: relative;
    text-transform: uppercase;
    margin-inline: 1.5rem;
    display: block;
    font-size: 1.125rem;
    opacity: 70%;
    transition:
      opacity 0.3s linear,
      background-size 0.125s ease-in,
      color 0.3s linear;
    background-image: linear-gradient(120deg, #fc0, #fc0);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 100% 0;
    &:hover {
      opacity: 100%;
      color: #000;
      background-size: 100% 100%;
    }
    &::after {
      content: "";
      position: absolute;
      min-width: calc(100%);
      padding-block: 0.0313rem;
      background-color: #fc0;
      transform: translateX(-50%);
      left: 50%;
      top: 93%;
      transition: $smooth-transition;
    }
  }

  // ^ Navbar burger -------------------/

  &__item--burger {
    display: none;
  }
  &__burger-inner {
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    transform: translateX(-65%);
    cursor: pointer;
    transition: opacity 2s ease-in-out;
    & input,
    &::before,
    &::after {
      content: "";
      padding-block: 0.5008px;
      padding-inline: 0.9375rem;
      background-color: $white;
    }
    & input {
      -webkit-appearance: none;
      outline: none;
      pointer-events: none;
      &:checked {
        opacity: 0;
      }
    }
  }
}
// ./Navbar -------------------/

// * Media -------------------/
@media (max-width: 1325px) {
  .navbar {
    &__links {
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
