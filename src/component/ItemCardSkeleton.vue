<template>
    <div class="skeleton">
        <div class="card__image skeleton__image"></div>
        <div class="card__content card__content--skeleton">
            <div class="skeleton__title"></div>
            <div class="skeleton__text-wrapper">
                <div class="skeleton__text"></div>
                <div class="skeleton__text"></div>
                <div class="skeleton__text"></div>
                <div class="skeleton__text"></div>
                <div class="skeleton__text"></div>
                <div class="skeleton__text"></div>
            </div>
            <div class="skeleton__link"></div>
        </div>
    </div>
</template>

<style lang="scss">
.card__content--skeleton {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.skeleton {
    min-height: 30.6729rem;
    &__image {
        animation: $an-skeleton;
        opacity: $op-70;
        width: 100%;
        min-height: $h-60;
    }
    &__link {
        height: 2.6729rem;
        border-radius: $br-6;
        animation: $an-skeleton;
    }
    &__title {
        min-height: $p-5;
        width: 60%;
        animation: $an-skeleton;
        border-radius: $br-2;
    }
    &__text-wrapper {
        min-height: $h-28;
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
    }
    100% {
        background-color: hsl(200, 20%, 95%);
    }
}
</style>
