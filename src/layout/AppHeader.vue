<template>
    <header class="header" :class="{ hidden: hideHeader }">
        <nav class="nav">
            <div class="nav__item">
                <router-link class="nav__logo" :to="{ name: 'home' }">
                    <!-- <picture>
                        <source
                            srcset="@img/content/logo/header-logo.avif"
                            type="image/avif" /> -->
                    <img
                        class="nav__logo-image"
                        src="@img/content/logo/header-logo.png"
                        alt="Herbalist Logo" />
                    <!-- </picture> -->
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
                            :to="{ name: 'recipesByIngredient' }"
                            ><span>Recipes By Ingredients</span>
                        </router-link>
                    </li>
                </ul>
                <ul class="nav__menu">
                    <li class="nav__menu-item">
                        <router-link
                            class="nav__menu-link nav__menu-link--secondary"
                            :to="{ name: 'home', hash: '#about' }">
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
                :class="{ active: showDrawer }"
                @click="toggleDrawer"
                ref="navBurgerRef" />
        </nav>
        <ItemDrawer
            :showDrawer="showDrawer"
            :closeDrawer="closeDrawer"
            ref="drawerRef" />
    </header>
</template>

<script setup>
/*
    imports
*/
import ItemBurgerMenu from '@/component/ItemBurgerMenu.vue';
import ItemDrawer from '@/component/ItemDrawer.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showDrawer = ref(false);
const navBurgerRef = ref();
const drawerRef = ref();

const toggleDrawer = () => {
    showDrawer.value = !showDrawer.value;
};

const closeDrawer = () => {
    showDrawer.value = false;
};

// reset drawer position
const handleResize = () => {
    if (window.innerWidth > 1280) {
        closeDrawer();
    }
};

// hide mobile nav on route change
router.afterEach(() => closeDrawer());

// hide on scroll
const hideHeader = ref(false);
let lastScrollY = window.scrollY;

const handleScroll = () => {
    if (!showDrawer.value) {
        if (lastScrollY < window.scrollY && window.scrollY >= 50) {
            hideHeader.value = true;
        } else {
            hideHeader.value = false;
        }
        lastScrollY = window.scrollY;
    }
};

// hooks
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
    windowRemoveEventListener('scroll', handleScroll);
    windowRemoveEventListener('resize', handleResize);
});
</script>

<style lang="scss">
// * Header -------------------/
.header {
    position: fixed;
    top: $top-0;
    z-index: $z-index-10;
    width: $w-full;
    min-height: $h-header;
    background-color: $c-grey-800;
    transform: $translateY-0;
    transition: transform $duration-300;
    &.hidden {
        transform: $translateY-full-neg;
    }
}

// * nav -------------------/
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: $p-12;
    z-index: $z-index-1000;
    &__item {
        display: flex;
        flex-direction: column-reverse;
    }
    &__logo {
        display: flex;
        align-items: center;
        transform: translateX(-0.25rem);
    }
    &__logo-image {
        transition: transform 0.9s ease-in-out;
        width: $w-14;
        &:hover {
            transform: rotate(360deg);
        }
    }
    &__logo-name {
        margin-left: $m-2_5;
        font-size: $fs-h6;
        opacity: $op-70;
        font-family: $ff-secondary;
        transition: opacity 0.3s linear;
        &:hover {
            opacity: $op-100;
        }
    }

    // ^ nav menu -------------------/
    &__menu {
        display: flex;
        justify-content: flex-end;
        margin-top: $m-5;
    }
    &__menu-item:last-child &__menu-link {
        margin-right: $m-0;
    }
    &__menu-item:last-child &__menu-link--primary {
        padding-right: $p-0;
    }

    &__menu-link {
        &:hover {
            opacity: $op-100;
        }
    }
    &__menu-link--primary {
        display: block;
        padding-bottom: $p-4;
        padding-inline: $p-4;
        font-size: $fs-h5;
        text-transform: uppercase;
        opacity: $op-70;
        transition: opacity $tr-smooth;
        & span {
            position: relative;
        }
        & span::after {
            content: '';
            position: absolute;
            padding-block: $p-px;
            width: 100%;
            top: 3rem;
            transition: opacity $tr-smooth;
            opacity: $op-0;
            background-color: $c-white;
        }
        &:hover span::after {
            bottom: 0;
            opacity: $op-100;
        }
    }
    &__menu-link--secondary {
        display: block;
        position: relative;
        margin-inline: $m-6;
        font-size: $fs-h6;
        text-transform: uppercase;
        background-image: linear-gradient(120deg, $c-pink, $c-pink);
        background-position: 0 100%;
        background-repeat: no-repeat;
        background-size: 100% 0;
        transition: opacity $tr-smooth, background-size 0.125s ease-in,
            color 0.3s linear;
        opacity: $op-70;
        padding-inline: $p-3;

        &::after {
            content: '';
            position: absolute;
            width: $w-full - 1;
            padding-block: calc($p-px / 2);
            left: $left-half;
            top: 93%;
            transform: $translateX-half-neg;
            transition: opacity $tr-smooth;
            background-color: $c-pink;
        }
        &:hover {
            background-size: 100% 100%;
            opacity: $op-100;
            color: $c-black;
        }
    }
}
// * Media -------------------/
@media (width <= $screen-xl) {
    .nav {
        position: absolute;
        top: $top-half;
        transform: $translateY-half-neg;
        width: $w-full;

        padding-inline: calc($p-12 - 2rem);
        &__menu-link--primary,
        &__menu-link--secondary {
            display: $none;
        }
    }
}
</style>
