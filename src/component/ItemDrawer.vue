<template>
    <section class="drawer">
        <nav class="drawer__wrapper" :class="{ active: showDrawer }">
            <div class="drawer__header"></div>
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
                        >All Recipes</router-link
                    >
                </li>
                <li class="drawer__item">
                    <router-link
                        :to="{ name: 'search-recipes' }"
                        class="drawer__link"
                        active-class="drawer__active-link"
                        >Search Recipes</router-link
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
                    <button class="drawer__btn" @click="toggleDrawerAndModal">
                        Log In
                    </button>
                </li>
            </ul>
        </nav>
        <ItemDarkOverlay :class="{ active: showDrawer }" @click="closeDrawer" />
    </section>
</template>

<script setup>
import ItemDarkOverlay from '@/component/ItemDarkOverlay.vue';
import { useModal } from '@/use/useModal';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps(['showDrawer', 'closeDrawer']);

const toggleDrawerAndModal = () => {
    setTimeout(() => {
        openModal();
    }, 300);
    props.closeDrawer();
    document.body.style.overflow = 'hidden';
};

const delayNavigation = () => {
    props.closeDrawer();
    setTimeout(() => {
        router.push({ name: 'home', hash: '#about' });
    }, 300);
};

const { openModal } = useModal();
</script>

<style lang="scss">
.drawer {
    position: relative;
    z-index: 11;
    &__header {
        position: fixed;
        top: 0;
        right: 0;
        min-height: $h-header;
        width: 100%;
        background-color: #272727;
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1px;
            width: 100%;
            background-color: $c-white;
            opacity: 12%;
        }
    }
    &__wrapper {
        &::-webkit-scrollbar {
            width: 15px;
            background-color: $c-white;
            position: absolute;
            right: 0;
        }
        &::-webkit-scrollbar-thumb {
            background-color: $c-grey-300;
        }
        position: fixed;
        top: $top-0;
        bottom: $bottom-0;
        left: 100%;
        padding-top: $h-header;
        display: $none;
        z-index: 2;
        display: flex;
        flex-direction: column;
        min-width: $w-80;
        min-height: $h-screen;
        font-size: $fs-h5;
        text-transform: uppercase;
        backdrop-filter: $dc-blur-hard;
        background-color: #272727;
        transition: transform $tr-smooth;

        &.active {
            transform: translateX(-100%);
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
            opacity: $op-100;
        }
    }
}

@media (width <= $screen-sm) {
    .drawer {
        &__wrapper {
            min-width: $w-full;
            font-size: $fs-h5;
        }
    }
}
</style>
