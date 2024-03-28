<template>
    <div class="dark-overlay"></div>
</template>

<script setup></script>

<style scoped lang="scss">
.dark-overlay {
    visibility: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
    min-height: 100vh;
    opacity: $op-0;
    transition: opacity $tr-smooth, visibility $tr-smooth;
    will-change: opacity;
    background-color: rgba($c-black, 0.7);
    &.active {
        visibility: visible;
        opacity: $op-100;
    }
}
</style>
