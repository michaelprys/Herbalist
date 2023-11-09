<template>
    <button class="burger-menu" type="button">
        <span class="burger-menu__item"></span>
    </button>
</template>

<style lang="scss">
.burger-menu {
    display: $none;
    flex-direction: column;
    gap: $g-2;
    background: $none;
    padding-block: calc($p-3 + 0.3125rem);
    padding-inline: $p-3;
    border-radius: $br-circle;
    transition: $tr-fast;
    &:hover {
        background-color: $c-grey;
    }
    & span,
    &::before,
    &::after {
        content: '';
        width: $bar-width;
        min-height: $bar-height;
        border-radius: $br-full;
        transform-origin: right center;
        background-color: $c-white;
        transition: $tr-smooth;
    }
    & span {
        transform-origin: left center;
        rotate: z -180deg;
        position: relative;
        left: $left-full;
    }
    &.active {
        transition: opacity $tr-smooth;
    }
    &.active span {
        width: $w-0;
        opacity: $op-0;
    }
    &.active::before {
        width: $x-width;
        transform: translateX(-0.25rem) translateY(calc($bar-height / -2))
            rotate(-45deg);
    }
    &.active::after {
        width: $x-width;
        transform: translateX(-0.25rem) translateY(calc($bar-height / 2))
            rotate(45deg);
    }
}

@media (width <= $screen-xl) {
    .burger-menu {
        display: flex;
    }
}
</style>
