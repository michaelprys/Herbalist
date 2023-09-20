<template>
  <button class="burger-menu" type="button">
    <span class="burger-menu__item"></span>
  </button>
</template>

<style lang="scss">
.burger-menu {
  display: none;
  flex-direction: column;
  gap: $burger-gap;
  z-index: 999;
  background: none;
  padding-block: 10px;
  padding-inline: 8px;
  border-radius: $br-rounded;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #6a6a6a42;
  }
  & span,
  &::before,
  &::after {
    content: "";
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
    transform: translateX(-4px) translateY(calc($bar-height / 2)) rotate(45deg);
  }
}

@media (max-width: 1279px) {
  .burger-menu {
    display: flex;
  }
}
</style>
