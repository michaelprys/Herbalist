<template>
  <div class="header__wrapper">
    <div>
      <router-link to="/"
        ><img class="header__logo" src="public/favicon.ico" alt="Logo"
      /></router-link>
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
    font-size: 19px;
    color: #fff;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transform: translateX(-50%);
        left: 50%;
        top: 98%;
        transition: opacity 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      }
    }
  }
}
</style>
