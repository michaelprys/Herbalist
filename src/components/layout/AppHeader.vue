<template>
    <header id="header">
        <div class="nav-wrapper" :class="{ hidden: hideNav }">
            <nav class="nav" ref="focusWithinRef">
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
                                ><span>Browse Recipes</span>
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
            <button class="nav__hamburger-menu" @click="openDrawer">
                <IconHamburger />
            </button>
        </div>
        <ItemDrawer />
    </header>
</template>

<script setup lang="ts">
import IconHamburger from '@/components/icons/IconHamburger.vue';
import ItemDrawer from '@/components/common/ItemDrawer.vue';
import { ref, watchEffect } from 'vue';
import { useOverlay } from '@/use/useOverlay';
import { useWindowScroll, useFocusWithin } from '@vueuse/core';

const focusWithinRef = ref<HTMLElement | null>(null);
const hideNav = ref(false);
const { y } = useWindowScroll();
const { focused } = useFocusWithin(focusWithinRef);

const { state: modalState, open: openModal } = useOverlay('modalLogin');
const { state: drawerState, open: openDrawer } = useOverlay('drawer');

let lastScrollY = y.value;
watchEffect(() => {
    if (!drawerState.value && !modalState.value) {
        if (lastScrollY < y.value && y.value >= 50) {
            hideNav.value = true;
        } else {
            hideNav.value = false;
        }
        lastScrollY = y.value;
    }
    if (focused.value && !focusWithinRef.value) {
        hideNav.value = false;
    }
});
</script>

<style scoped lang="scss">
.nav-wrapper {
    position: fixed;
    top: 0;
    width: $w-full;
    z-index: 2;
    min-height: $h-header;
    background-color: $c-grey-800;
    transform: translateY(0);
    transition: transform 0.3s;
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
    &__hamburger-menu {
        display: none;
        @include btn-hover;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        fill: $c-white;
        padding: $p-1_5;
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
        &__hamburger-menu {
            display: block;
        }
    }
}
@media (width <= $screen-sm) {
    .nav {
        &__logo {
            width: 8rem;
            height: 8rem;
        }
        &__logo-name {
            font-size: $fs-small;
        }
    }
}
</style>
