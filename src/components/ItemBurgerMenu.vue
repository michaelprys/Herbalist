<template>
    <button class="burger-menu" type="button">
        <span class="burger-menu__item"></span>
    </button>
</template>

<style lang="scss">
.burger-menu {
    // variables

    display: none;
    flex-direction: column;
    gap: $burger-gap;
    z-index: 100;
    background: none;
    padding-block: 10px;
    padding-inline: 8px;
    border-radius: $br-medium;
    &:hover {
        background-color: $c-grey;
    }
    & span,
    &::before,
    &::after {
        content: '';
        width: $bar-width;
        height: $bar-height;
        border-radius: $br-full;
        transform-origin: right center;
        background-color: $c-white;
        transition: $tr-smooth;
    }
    & span {
        transform-origin: left center;
        rotate: z -180deg;
        position: relative;
        left: 100%;
    }
    &.active {
        transition: opacity $tr-smooth;
    }
    &.active span {
        width: 0;
        opacity: 0;
    }
    &.active::before {
        width: $x-width;
        transform: translateX(-4px) translateY(calc($bar-height / -2))
            rotate(-45deg);
    }
    &.active::after {
        width: $x-width;
        transform: translateX(-4px) translateY(calc($bar-height / 2))
            rotate(45deg);
    }
}

@media (width <= $screen-xl) {
    .burger-menu {
        display: flex;
    }
}
</style>
