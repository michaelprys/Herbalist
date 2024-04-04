<template>
    <section class="section" id="intro">
        <div class="container">
            <h2 class="section__suptitle">
                —&nbsp Revitalize, Nourish, Thrive &nbsp—
            </h2>
            <h1 class="section__intro-title">Welcome to Herbalist</h1>
            <router-link class="section__button" to="#popular">
                Popular recipes
            </router-link>
        </div>
    </section>
</template>

<script setup></script>

<style scoped lang="scss">
.section {
    @include bg;
    padding-top: calc($spacing-fixed-header + $p-16);
    padding-bottom: $p-28;
    min-height: 100svh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    @supports (background-image: url('@img/section/intro/bg.avif')) {
        background-image: url('@img/section/intro/bg.avif');
    }
    background-image: url('@img/section/intro/bg.jpg');
    &__suptitle {
        font-size: $fs-h5;
        font-family: $ff-tertiary;
        text-align: center;
        text-transform: uppercase;
    }
    &__intro-title {
        font-size: 8rem;
        font-family: $ff-intro;
        text-align: center;
        padding-bottom: $p-3_5;
        line-height: 1.4;
    }
    &__button {
        position: absolute;
        bottom: 8rem;
        left: 50%;
        transform: translateX(-50%);
        padding-block: $p-4;
        padding-inline: $p-8;
        border-radius: $br-2;
        text-transform: uppercase;
        color: $c-grey-500;
        font-size: $fs-medium;
        transition: background-color $tr-basic;
        background-color: lighten($c-grey-50, 13%);
        color: $c-grey-900;
        font-family: $ff-tertiary;
        &:hover {
            background-color: #edeeac;
        }
    }
}

@media (width <= $screen-xxl) {
    .section {
        &__suptitle {
            font-size: $fs-h6;
        }
        &__intro-title {
            font-size: 7rem;
        }
    }
}
@media (width <= $screen-lg) {
    .section {
        &__suptitle {
            font-size: $fs-base;
        }
        &__intro-title {
            font-size: 5rem;
        }
    }
}
@media (width <= $screen-md) {
    .section {
        &__suptitle {
            font-size: 0.85rem;
        }
        &__intro-title {
            font-size: 4rem;
        }
        &__button {
            padding-block: $p-3_5;
            padding-inline: $p-6;
            font-size: $fs-smaller;
        }
    }
}
</style>
