<template>
    <section class="drawer">
        <div
            class="drawer__overlay"
            :class="{ active: showDrawer }"
            ref="drawerOverlayRef"
            @click="closeDrawer"></div>
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
                    <router-link
                        :to="{ name: 'about' }"
                        class="drawer__link"
                        active-class="drawer__active-link">
                        About</router-link
                    >
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
    </section>
</template>

<script setup>
defineProps(['showDrawer', 'closeDrawer']);
</script>

<style lang="scss">
.drawer {
    &__overlay {
        visibility: $hidden;
        position: fixed;
        top: $top-0;
        right: $right-0;
        bottom: $bottom-0;
        top: $left-0;
        width: $w-screen;
        min-height: $h-screen;
        z-index: $z-index-1;
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
        display: $none;
        position: fixed;
        z-index: $z-index-100;
        display: flex;
        flex-direction: column;
        left: $left-full;
        top: $top-0;
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
            background-color: rgba($c-grey-400, 0.5);
            opacity: $op-100;
        }
    }
    &__active-link {
        opacity: $op-100;
        background-color: rgba($c-grey-400, 0.5);
        &:hover {
            background-color: rgba($c-grey-500, 1);
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
