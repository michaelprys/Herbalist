<template>
    <div class="skeleton" :class="{ active: isSkeletonActive }">
        <div class="card__image skeleton__image"></div>
        <div class="card__content card__content--skeleton">
            <div class="skeleton__title"></div>
            <div class="card__title card__text skeleton__text-wrapper">
                <div class="skeleton__text" v-for="item in 6" :key="item"></div>
            </div>
            <div class="card__link skeleton__link"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['isSkeletonActive']);
</script>

<style lang="scss">
.card__content--skeleton {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.skeleton {
    opacity: 0;
    border-radius: $br-6;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: $c-white;
    box-shadow: $dc-shadow-card;
    transition: opacity $tr-smooth;
    &.active {
        opacity: 1;
    }
    &__image {
        animation: $an-skeleton;
        opacity: $op-70;
        width: 100%;
        height: $h-60;
    }
    &__link {
        height: 2.6729rem;
        border-radius: $br-6;
        animation: $an-skeleton;
    }
    &__title {
        min-height: $h-6;
        width: 60%;
        animation: $an-skeleton;
        border-radius: $br-2;
    }
    &__text-wrapper {
        margin-top: 0.5rem;
        padding-top: $p-3_5;
    }
    &__text {
        border-radius: $br-2;
        animation: $an-skeleton;
        min-height: $h-1_5;
        margin-bottom: $m-1_5;
        &:last-child {
            width: 80%;
        }
    }
}

@keyframes skeleton-loading {
    0% {
        background-color: hsl(200, 20%, 70%);
        opacity: 0;
    }
    100% {
        opacity: 1;
        background-color: hsl(200, 20%, 95%);
    }
}
</style>
