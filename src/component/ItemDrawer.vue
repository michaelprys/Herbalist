<template>
    <section class="drawer">
        <nav class="drawer__wrapper" :class="{ active: showDrawer }">
            <ul>
                <li>
                    <router-link
                        to="/"
                        class="drawer__link"
                        active-class="drawer__active-link"
                        >Home</router-link
                    >
                </li>
                <li>
                    <router-link
                        :to="{ name: 'searchRecipes' }"
                        class="drawer__link"
                        active-class="drawer__active-link"
                        >Search Recipes</router-link
                    >
                </li>
                <li>
                    <router-link
                        :to="{ name: 'recipesByLetter' }"
                        class="drawer__link"
                        active-class="drawer__active-link"
                        >Recipes By Letter</router-link
                    >
                </li>
                <li>
                    <router-link
                        :to="{ name: 'recipesByIngredient' }"
                        class="drawer__link"
                        active-class="drawer__active-link"
                        >Recipes By Ingredients</router-link
                    >
                </li>
                <li>
                    <a class="drawer__link" href="#about"> About</a>
                </li>
                <li>
                    <router-link
                        :to="{ name: 'login' }"
                        class="drawer__link"
                        active-class="drawer__active-link"
                        >Log In</router-link
                    >
                </li>
            </ul>
        </nav>
        <div
            class="drawer__overlay"
            :class="{ active: showDrawer }"
            ref="drawerOverlayRef"
            @click="closeDrawer"></div>
    </section>
</template>

<script setup>
defineProps(['showDrawer', 'closeDrawer', 'menuItems']);
</script>

<style lang="scss">
.drawer {
    &__overlay {
        visibility: $hidden;
        position: fixed;
        max-height: calc(100vh - 9rem);
        width: $w-screen;
        min-height: $h-screen;
        opacity: $op-0;
        transition: opacity $tr-smooth, visibility $tr-smooth;
        will-change: opacity;
        background-color: rgba($c-black, 0.5);
        &.active {
            visibility: visible;
            opacity: $op-100;
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
        overflow-y: scroll;
        top: $top-0;
        bottom: $bottom-0;
        left: $left-full;
        display: $none;
        z-index: $z-index-100;
        display: flex;
        flex-direction: column;
        min-width: $w-80;
        min-height: $h-screen;
        padding-top: calc($burger-height + $m-2_5 + 4.1rem);
        font-size: $fs-h5;
        text-transform: uppercase;
        backdrop-filter: $dc-blur-hard;
        background-color: rgba(#272727, 0.97);
        transition: transform $tr-smooth;
        &.active {
            transform: translate(-100%);
        }
    }
    &__link {
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
    .drawer__wrapper {
        min-width: $w-full;
        font-size: $fs-h5;
    }
}
</style>
