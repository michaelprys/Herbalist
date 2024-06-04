<template>
    <nav
        class="drawer"
        :class="{ active: drawerState }"
        :inert="!drawerState"
        :aria-hidden="!drawerState"
        ref="clickOutsideRef"
        @keydown.esc="closeDrawer">
        <div ref="focusRef">
            <div class="drawer__header">
                <button class="drawer__hamburger-menu" @click="closeDrawer">
                    <IconClose />
                </button>
            </div>
            <ul class="drawer__list">
                <li class="drawer__item">
                    <router-link
                        to="/"
                        class="drawer__link"
                        active-class="drawer__active-link"
                        >Home</router-link
                    >
                </li>
                <li class="drawer__item">
                    <router-link
                        :to="{ name: 'recipes' }"
                        class="drawer__link"
                        active-class="drawer__active-link"
                        >Recipes</router-link
                    >
                </li>
                <li class="drawer__item">
                    <router-link
                        :to="{ name: 'ingredient' }"
                        class="drawer__link"
                        active-class="drawer__active-link"
                        >Recipes By Ingredients</router-link
                    >
                </li>
                <li class="drawer__item">
                    <button class="drawer__btn" @click="delayNavigation">
                        About
                    </button>
                </li>
                <li class="drawer__item">
                    <button class="drawer__btn" @click="closeDrawerOpenModal">
                        Log In
                    </button>
                </li>
            </ul>
        </div>
    </nav>
    <ItemDarkOverlay :class="{ active: drawerState }" />
</template>

<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue';
import ItemDarkOverlay from '@/components/common/ItemDarkOverlay.vue';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useOverlay } from '@/use/useOverlay';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
const router = useRouter();

const { open: openModal } = useOverlay('modalLogin');
const {
    state: drawerState,
    close: closeDrawer,
    focusRef,
    clickOutsideRef,
} = useOverlay('drawer');

const closeDrawerOpenModal = () => {
    setTimeout(() => {
        openModal();
    }, 200);
    closeDrawer();
    document.body.style.overflow = 'hidden';
};

const delayNavigation = () => {
    closeDrawer();
    setTimeout(() => {
        router.push({ name: 'home', hash: '#about' });
    }, 300);
};

watchEffect(() => {
    if (width.value > 1280 && drawerState.value) {
        closeDrawer();
    }
});

router.afterEach(() => {
    if (drawerState.value) {
        closeDrawer();
    }
});
</script>

<style scoped lang="scss">
.section {
    position: relative;
    z-index: 13;
}
.drawer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    min-width: $w-80;
    min-height: 100svh;
    font-size: $fs-h5;
    transform: translateX(100%);
    text-transform: uppercase;
    backdrop-filter: $dc-blur-hard;
    background-color: #272727;
    transition: transform $tr-smooth;
    &::-webkit-scrollbar {
        width: $w-3_5;
        background-color: $c-white;
        position: absolute;
        right: 0;
    }
    &::-webkit-scrollbar-thumb {
        background-color: $c-grey-300;
    }
    &.active {
        transform: translateX(-100%);
    }
    &__header {
        position: relative;
        top: 0;
        right: 0;
        min-height: $h-header;
        width: 100%;
        background-color: #272727;
        &::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: $c-white;
            opacity: 12%;
        }
    }
    &__list {
        overflow-y: auto;
    }
    &__btn {
        font-family: inherit;
        color: inherit;
        background: none;
        text-transform: uppercase;
        font-size: inherit;
        width: 100%;
        text-align: left;
    }
    &__link,
    &__btn {
        padding-inline: $p-6;
        padding-block: $p-4;
        opacity: $op-70;
        transition: background-color $tr-smooth, opacity $tr-smooth;
        cursor: pointer;
        &:hover {
            background-color: rgba($c-grey-600, 0.5);
            opacity: $op-100;
        }
    }
    &__active-link {
        opacity: $op-100;
        background-color: rgba($c-grey-600, 0.5);
        &:hover {
            background-color: rgba($c-grey-600, 1);
        }
    }
    &__hamburger-menu {
        @include btn-hover;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 17px;
        fill: $c-grey-50;
        cursor: pointer;
    }
}

@media (width <= $screen-sm) {
    .drawer {
        min-width: $w-full;
        font-size: $fs-h5;
    }
}
</style>
