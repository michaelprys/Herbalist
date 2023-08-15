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
        <span>Herbalist</span>
      </router-link>
    </div>
    <nav class="navigation">
      <ul class="navigation__items">
        <li>
          <router-link class="navigation__item" to="/searchRecipes"
            >Search Recipes</router-link
          >
        </li>
        <li>
          <router-link class="navigation__item" to="/recipesByLetter"
            >Recipes By Letter</router-link
          >
        </li>
        <li>
          <router-link class="navigation__item" to="/recipesByIngredients"
            >Recipes By Ingredients</router-link
          >
        </li>
      </ul>
    </nav>
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
    :last-child {
      margin-left: 6px;
    }
  }
}

.navigation {
  &__items {
    display: flex;
  }
  &__item {
    position: relative;
    text-transform: uppercase;
    display: block;
    padding-block: 30px;
    margin-inline: 20px;
    font-size: 115%;
    color: #fff;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      padding-block: 0.0625rem;
      background-color: #fff;
      transform: translateX(-50%);
      left: 50%;
      top: 98%;
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
    &:hover::after {
      opacity: 1;
    }
  }
}
</style>
