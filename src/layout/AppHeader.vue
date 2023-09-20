<template>
  <header class="header" :class="{ hidden: hideHeader }">
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

      <div class="nav__item nav__item--menus">
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
      </div>
      <ItemBurgerMenu
        :class="{ active: showMobileNav }"
        ref="navBurgerRef"
        @click="toggleMobileNav" />
    </nav>
    <ItemMobileNav :class="{ active: showMobileNav }" ref="navMenuRef" />
  </header>
</template>

<script setup>
import ItemMobileNav from "@/components/ItemMobileNav.vue";
import ItemBurgerMenu from "@/components/ItemBurgerMenu.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useRouter } from "vue-router";

const router = useRouter();

const showMobileNav = ref(false);
const navMenuRef = ref();
const navBurgerRef = ref();

const closeMobileNav = () => {
  showMobileNav.value = false;
};

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value;
};

onClickOutside(
  navMenuRef,
  () => {
    closeMobileNav();
  },
  { ignore: [navBurgerRef] }
);

/*
  hide on scroll
*/
const hideHeader = ref(false);
const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

const handleScroll = () => {
  if (!showMobileNav.value) {
    if (lastScrollY < window.scrollY) {
      hideHeader.value = true;
    } else {
      hideHeader.value = false;
    }
    lastScrollY = window.scrollY;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

/*
  hide mobile nav on route change
*/
router.afterEach((to, from) => {
  closeMobileNav();
});

/*
  reset sidenav and burger menu on window size change
*/
</script>

<style lang="scss">
// * Header -------------------/
.header {
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
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
  padding-inline: $p-header;

  &__item {
    display: flex;
    flex-direction: column-reverse;
  }
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
}
// * Media -------------------/
@media (max-width: 1279px) {
  .nav {
    padding-inline: calc($p-header - 2rem);
    &__menu-link--primary,
    &__menu-link--secondary {
      display: none;
    }
  }
}
</style>
