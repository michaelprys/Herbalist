<template>
    <div class="letters">
        <router-link class="letters__item"> </router-link>
    </div>
</template>

<script setup>
// import { ref, onMounted } from 'vue';

// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<style lang="scss">
.letters {
    @include bar;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: $m-32;
    font-weight: $fw-regular;
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
