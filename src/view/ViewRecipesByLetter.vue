<template>
    <div class="container">
        <div class="letters-wrapper">
            <div class="letters">
                <router-link
                    class="letters__item"
                    :to="{ name: recipesByLetter }"
                    >Hello</router-link
                >
            </div>
        </div>
    </div>
</template>

<script setup>
// import { ref, onMounted } from 'vue';

// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<style lang="scss">
.letters-wrapper {
    min-height: 100vh;
    padding-top: calc($spacing-fixed-header + $p-32);
}
.letters {
    @include bar;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &__item {
        padding-inline: $p-2;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: $w-0;
            min-height: $h-0_5;
            background-color: $c-white;
            transition: $tr-smooth;
            transform: $translateX-half-neg;
            left: $left-half;
        }
        &:hover::after {
            width: $w-5;
        }
    }
}
</style>
