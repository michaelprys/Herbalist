<template>
    <header id="header">
        <div class="nav-wrapper" :class="{ hidden: hideNav }">
            <nav class="nav">
                <div class="nav__item">
                    <router-link class="nav__logo" :to="{ name: 'home' }">
                        <picture>
                            <source
                                srcset="@img/logo/header-logo.avif"
                                type="image/avif" />
                            <img
                                class="nav__logo-image"
                                src="@img/logo/header-logo.png"
                                alt="Herbalist Logo" />
                        </picture>
                        <span class="nav__logo-name">Herbalist</span>
                    </router-link>
                </div>
                <div class="nav__item nav__item--menus">
                    <ul class="nav__menu">
                        <li class="nav__menu-item">
                            <router-link
                                class="nav__menu-link nav__menu-link--primary"
                                :to="{
                                    name: 'recipes',
                                }"
                                ><span>Recipes</span>
                            </router-link>
                        </li>
                        <li class="nav__menu-item">
                            <router-link
                                class="nav__menu-link nav__menu-link--primary"
                                :to="{ name: 'search-recipes' }"
                                ><span>Search Recipes</span>
                            </router-link>
                        </li>
                        <li class="nav__menu-item">
                            <router-link
                                class="nav__menu-link nav__menu-link--primary"
                                :to="{ name: 'ingredient' }"
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
                            <button
                                class="nav__menu-btn"
                                type="button"
                                @click="openModal">
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <ItemBurgerMenu
                :class="{ active: showDrawer, hidden: hideNav }"
                @click="toggleDrawer"
                ref="navBurgerRef" />
            <ItemDrawer
                :class="{ hidden: hideNav }"
                :showDrawer="showDrawer"
                :closeDrawer="closeDrawer"
                ref="drawerRef" />
        </div>
    </header>
</template>

<script setup>
import ItemBurgerMenu from '@/components/common/ItemBurgerMenu.vue';
import ItemDrawer from '@/components/common/ItemDrawer.vue';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useModal } from '@/use/useModal';
import { useWindowSize, useWindowScroll } from '@vueuse/core';

const { width } = useWindowSize();
const { y } = useWindowScroll();

const router = useRouter();
const showDrawer = ref(false);
const navBurgerRef = ref();
const drawerRef = ref();
const { modalVisible, openModal } = useModal();

const toggleDrawer = () => {
    showDrawer.value = !showDrawer.value;
};

const closeDrawer = () => {
    showDrawer.value = false;
};

// close drawer on route change
router.afterEach(() => closeDrawer());

// close drawer on window resize
watchEffect(() => {
    if ((width.value > 1280) & !modalVisible.value) {
        closeDrawer();
    }
});
// hide header on scroll
const hideNav = ref(false);
let lastScrollY = y.value;
watchEffect(() => {
    if (!showDrawer.value && !modalVisible.value) {
        if (lastScrollY < y.value && y.value >= 50) {
            hideNav.value = true;
        } else {
            hideNav.value = false;
        }
        lastScrollY = y.value;
    }
});
</script>

<style scoped lang="scss">
.nav-wrapper {
    position: fixed;
    top: 0;
    width: $w-full;
    z-index: 10;
    min-height: $h-header;
    background-color: $c-grey-800;
    transform: translateY(0);
    transition: transform $dur-300;
    &.hidden {
        transform: translateY(-100%);
    }
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: $p-12;
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

    &__menu-item:nth-child(2) &__menu-btn {
        margin-right: $m-0;
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
    &__menu-btn {
        height: 100%;
        font-family: inherit;
        color: inherit;
        background: none;
        text-transform: uppercase;
    }
    &__menu-link--secondary,
    &__menu-btn {
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
        cursor: pointer;
        &::after {
            content: '';
            position: absolute;
            width: $w-full - 1;
            padding-block: 0.5px;
            left: 50%;
            top: 93%;
            transform: translateX(-50%);
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

@media (width <= $screen-xl) {
    .nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: $w-full;
        padding-inline: $p-8;
        &__menu-link--primary,
        &__menu-link--secondary,
        &__menu-btn {
            display: none;
        }
    }
}
</style>
