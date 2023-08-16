<template>
  <div class="header__wrapper">
    <div>
      <router-link class="header__logo" to="/"
        ><img
          class="header__logo-img"
          src="@/assets/images/logo/header-logo.png"
          alt="Herbalist Logo"
          width="60"
        />
        <span class="header__logo-text">Herbalist</span>
      </router-link>
    </div>
    <!-- ./header-wrapper -->
    <nav class="navigation">
      <ul class="navigation__secondary">
        <li>
          <router-link class="navigation__secondary-item" to="/about"
            >About</router-link
          >
        </li>
        <li>
          <router-link class="navigation__secondary-item" to="/login"
            >Log In</router-link
          >
        </li>
      </ul>
      <!-- ./navigation__secondary -->
      <ul class="navigation__primary">
        <li>
          <router-link class="navigation__primary-item" to="/searchRecipes"
            >Search Recipes</router-link
          >
        </li>
        <li>
          <router-link class="navigation__primary-item" to="/recipesByLetter"
            >Recipes By Letter</router-link
          >
        </li>
        <li>
          <router-link
            class="navigation__primary-item"
            to="/recipesByIngredients"
            >Recipes By Ingredients</router-link
          >
        </li>
      </ul>
      <!-- ./navigation-primary -->
    </nav>
    <!-- ./navigation -->
  </div>
</template>

<!-- script -->
<script setup></script>

<!-- style -->
<style lang="scss">
.header {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    display: flex;
    align-items: center;
    &-img {
      transition: transform 0.9s ease-in-out;
      &:hover {
        transform: rotate(360deg);
      }
    }
    &-text {
      margin-left: 0.4375rem;
      opacity: 70%;
      transition: opacity 0.3s linear;
      &:hover {
        opacity: 1;
      }
    }
  }
}

.navigation {
  //primary
  &__primary {
    display: flex;
  }
  &__primary-item {
    position: relative;
    text-transform: uppercase;
    display: block;
    padding-bottom: 1.875rem;
    padding-inline: 1.5rem;
    font-size: 119%;
    opacity: 70%;
    &::after {
      content: "";
      position: absolute;
      min-width: $fit-size;
      padding-block: 0.0625rem;
      background-color: $white;
      transform: translateX(-50%);
      left: 50%;
      top: 98%;
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

  // secondary
  &__secondary {
    display: flex;
    justify-content: end;
  }
  &__secondary-item {
    position: relative;
    font-size: 110%;
    text-transform: uppercase;
    display: block;
    margin-block: 20px;
    margin-inline: 20px;
    padding-inline: 2px;
    font-size: 115%;
    opacity: 70%;
    transform: translateX(-1px);
    transition:
      opacity 0.3s linear,
      background-size 0.125s ease-in,
      color 0.3s linear;
    &:hover {
      opacity: 100%;
      color: #000;
      background-size: 100% 100%;
    }

    // bg effect
    background-image: linear-gradient(120deg, #fc0, #fc0);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 100% 0;

    // underline
    &::after {
      content: "";
      position: absolute;
      min-width: calc(100% - 0.2rem);
      padding-block: 0.0313rem;
      background-color: #fc0;
      transform: translateX(-50%);
      left: 50%;
      top: 93%;
      transition: $smooth-transition;
    }
  }
}
</style>
