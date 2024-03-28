<template>
    <section class="section">
        <div class="section__bg"></div>
        <div class="container">
            <Splide class="carousel" :options="carouselOptions">
                <SplideSlide class="carousel__slide"
                    ><div class="carousel__wrapper">
                        <div class="carousel__avatar carousel__avatar--1"></div>
                        <div class="carousel__content">
                            <blockquote class="carousel__quote">
                                "These recipes have proven to be transformative
                                for individuals, contributing to their
                                well-being in profound ways."
                            </blockquote>
                            <span class="carousel__name"
                                >Maija Ahnger, Herbalist
                            </span>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide class="carousel__slide"
                    ><div class="carousel__wrapper">
                        <div class="carousel__avatar carousel__avatar--2"></div>
                        <div class="carousel__content">
                            <blockquote class="carousel__quote">
                                "Explore adaptogenic herbs like ashwagandha or
                                rhodiola to help your body adapt to stress and
                                promote overall balance."
                            </blockquote>
                            <span class="carousel__name"
                                >Akari Fujimura, Naturopath
                            </span>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide class="carousel__slide"
                    ><div class="carousel__wrapper">
                        <div class="carousel__avatar carousel__avatar--3"></div>
                        <div class="carousel__content">
                            <blockquote class="carousel__quote">
                                "Consider calendula salves or creams for skin
                                irritations and minor wounds due to its soothing
                                and healing properties."
                            </blockquote>
                            <span class="carousel__name"
                                >Yu Ming, Herbalist
                            </span>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const carouselOptions = {
    arrows: false,
    flickPower: 300,
    gap: '2.5rem',
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    type: 'loop',
    pagination: false,
    // TODO: enable autoplay
    // autoplay: true,
    interval: 6000,
};
</script>

<style scoped lang="scss">
.section {
    padding-block: $p-0;
    background-color: #ebf1f1;
    position: relative;
    margin-inline: auto;
    width: 100%;
    height: 100%;

    &__bg {
        @include bg;
        opacity: 12%;
        width: 100%;
        height: 100%;
        position: absolute;
        @supports (
            background-image: url('@img/decor/section/popular/bg.avif')
        ) {
            background-image: url('@img/decor/section/popular/bg.avif');
        }
        background-image: url('@img/decor/section/popular/bg.jpg');
    }
}
.carousel {
    display: flex;
    &__slide {
        padding-block: $p-9;
    }
    &__wrapper {
        display: flex;
        align-items: center;
        gap: $g-10;
    }
    &__avatar {
        @include bg;
        width: 240px;
        height: 240px;
        border-radius: $br-circle;
        &--1 {
            @supports (
                background-image:
                    url('@img/decor/section/feedback/avatar-1.avif')
            ) {
                background-image: url('@img/decor/section/feedback/avatar-1.avif');
            }
            background-color: $c-placeholder;
            background-image: url('@img/decor/section/feedback/avatar-1.jpg');
        }
        &--2 {
            @supports (
                background-image:
                    url('@img/decor/section/feedback/avatar-2.avif')
            ) {
                background-image: url('@img/decor/section/feedback/avatar-2.avif');
            }
            background-color: $c-placeholder;
            background-image: url('@img/decor/section/feedback/avatar-2.jpg');
        }
        &--3 {
            @supports (
                background-image:
                    url('@img/decor/section/feedback/avatar-3.avif')
            ) {
                background-image: url('@img/decor/section/feedback/avatar-3.avif');
            }
            background-color: $c-placeholder;
            background-image: url('@img/decor/section/feedback/avatar-3.jpg');
        }
    }
    &__quote,
    &__name {
        color: $c-grey-500;
        font-size: $fs-h5;
        font-style: italic;
    }
    &__quote {
        position: relative;
        &::after {
            position: absolute;
            content: '';
            height: $h-0_5;
            width: $w-16;
            top: 100%;
            margin-top: $m-3_5;
            background-color: darken($c-pink, 10%);
        }
    }
    &__name {
        display: block;
        margin-top: $m-7;
    }
}

@media (width <= $screen-lg) {
    .carousel {
        &__wrapper {
            flex-direction: column;
        }
        &__quote,
        &__name {
            text-align: center;
        }
        &__quote {
            &::after {
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
}
</style>
