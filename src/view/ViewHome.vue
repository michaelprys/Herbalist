<template>
    <!-- TODO: change to proper classes according to BEM -->
    <div class="transition-container">
        <section class="section section--intro" id="intro">
            <div class="container">
                <h2 class="section--intro__suptitle">
                    —&nbsp Revitalize, Nourish, Thrive &nbsp—
                </h2>
                <h1 class="section--intro__title">Welcome to Herbalist</h1>
                <router-link to="#popular" class="section--intro__button">
                    Popular recipes
                </router-link>
            </div>
        </section>
        <section class="section section--popular" id="popular">
            <div class="section--popular__container-slider">
                <h2 class="section__title section__title--popular">
                    Popular recipes
                </h2>
                <ItemSwiper class="section--popular__slider" />
            </div>
        </section>
        <!-- ./popular -->

        <section class="section section--feedback">
            <div class="section--feedback__bg-wrapper">
                <div class="section--feedback__bg"></div>
                <div class="container">
                    <Splide
                        class="section--feedback__slider"
                        :options="sliderOptions">
                        <SplideSlide class="section--feedback__slide"
                            ><div class="section--feedback__wrapper">
                                <div
                                    class="section--feedback__avatar section--feedback__avatar--1"></div>
                                <div class="section--feedback__content">
                                    <blockquote
                                        class="section--feedback__quote">
                                        "These recipes have proven to be
                                        transformative for individuals,
                                        contributing to their well-being in
                                        profound ways."
                                    </blockquote>
                                    <span class="section--feedback__name"
                                        >Maija Ahnger, Herbalist
                                    </span>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide class="section--feedback__slide"
                            ><div class="section--feedback__wrapper">
                                <div
                                    class="section--feedback__avatar section--feedback__avatar--2"></div>
                                <div class="section--feedback__content">
                                    <blockquote
                                        class="section--feedback__quote">
                                        "Explore adaptogenic herbs like
                                        ashwagandha or rhodiola to help your
                                        body adapt to stress and promote overall
                                        balance."
                                    </blockquote>
                                    <span class="section--feedback__name"
                                        >Akari Fujimura, Naturopath
                                    </span>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide class="section--feedback__slide"
                            ><div class="section--feedback__wrapper">
                                <div
                                    class="section--feedback__avatar section--feedback__avatar--3"></div>
                                <div class="section--feedback__content">
                                    <blockquote
                                        class="section--feedback__quote">
                                        "Consider calendula salves or creams for
                                        skin irritations and minor wounds due to
                                        its soothing and healing properties."
                                    </blockquote>
                                    <span class="section--feedback__name"
                                        >Yu Ming, Herbalist
                                    </span>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </section>
        <!-- ./feedback -->

        <div class="container">
            <section class="section section--philosophy" id="about">
                <h3 class="section__title">Our Philosophy</h3>
                <div class="wrapper-content">
                    <p class="section--philosophy__text">
                        Herbalist is rooted in the belief that nature provides
                        us with an abundance of healing herbs and botanicals
                        that can be artfully combined to create beverages and
                        dishes that are both delicious and healthful. We strive
                        to celebrate the bountiful gifts of the earth by sharing
                        recipes that embrace the holistic benefits of herbs. Our
                        mission is to inspire a deeper connection with the
                        natural world, promoting well-being through the
                        transformative power of plant-based recipes.
                    </p>
                    <div class="section--philosophy__img"></div>
                </div>
            </section>
        </div>
        <!-- ./philosophy -->

        <div class="section--herb-notes__bg">
            <div class="container">
                <section class="section section--herb-notes">
                    <h3 class="section__title section__title--herb-notes">
                        Herb Notes
                    </h3>
                    <div class="wrapper-content wrapper-content--herb-notes">
                        <div class="section--herb-notes__wrapper">
                            <div
                                class="section--herb-notes__wrapper-img section--herb-notes__wrapper-img--1">
                                <div class="section--herb-notes__overlay">
                                    <a href="#">
                                        <span
                                            class="section--herb-notes__overlay-link"
                                            >See recipes with turmeric</span
                                        >
                                    </a>
                                </div>
                                <!-- <picture>
                <source
                    srcset="@img/content/herb-notes/tumeric.avif"
                    type="image/avif" />
                <source
                    srcset="@img/content/herb-notes/tumeric.webp"
                    type="image/webp" /> -->
                                <img
                                    class="section--herb-notes__img--1"
                                    src="@img/content/section/herb-notes/tumeric.jpg"
                                    loading="lazy"
                                    alt="tumeric" />
                                <!-- </picture> -->
                            </div>
                            <div class="section--herb-notes__wrapper-content">
                                <h4 class="section--herb-notes__subtitle">
                                    The Benefits of Turmeric
                                </h4>
                                <p class="section--herb-notes__text">
                                    Turmeric, derived from the Curcuma longa
                                    plant, is a powerhouse of health benefits.
                                    Its key active compound, curcumin, lends a
                                    golden hue and a range of advantages.
                                </p>
                            </div>
                        </div>

                        <div class="section--herb-notes__wrapper">
                            <div
                                class="section--herb-notes__wrapper-img section--herb-notes__wrapper-img--2">
                                <div class="section--herb-notes__overlay">
                                    <a href="#">
                                        <span
                                            class="section--herb-notes__overlay-link"
                                            >See recipes with ginger</span
                                        >
                                    </a>
                                </div>

                                <!-- <picture> -->
                                <!-- <source
                    srcset="@img/content/section/herb-notes/ginger.avif"
                    type="image/avif" />
                <source
                    srcset="@img/content/section/herb-notes/ginger.webp"
                    type="image/webp" /> -->
                                <img
                                    class="section--herb-notes__img--2"
                                    src="@img/content/section/herb-notes/ginger.jpg"
                                    loading="lazy"
                                    alt="ginger" />
                                <!-- </picture> -->
                            </div>

                            <div class="section--herb-notes__wrapper-content">
                                <h4 class="section--herb-notes__subtitle">
                                    Ginger's Positive Impact
                                </h4>
                                <p class="section--herb-notes__text">
                                    Ginger, celebrated for its distinctive
                                    flavor, brings more than just taste to the
                                    table with a myriad of health benefits.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <!-- ./herb notes -->

        <div class="container">
            <section class="section section--apart">
                <h3 class="section__title">What Sets Us Apart</h3>
                <div class="wrapper-content">
                    <div class="section--apart__img"></div>
                    <ul class="section--apart__list">
                        <li class="section--apart__item">
                            <strong>Quality Ingredients</strong>: We source the
                            finest herbs and botanicals to ensure the highest
                            quality in every recipe. Our commitment to
                            excellence begins with the selection of premium
                            ingredients that reflect our dedication to your
                            well-being.
                        </li>
                        <li class="section--apart__item">
                            <strong>Expertly Curated Recipes</strong>: Our team
                            of experienced herbalists and chefs work in harmony
                            to bring you recipes that not only taste exceptional
                            but also harness the natural healing properties of
                            herbs. Each creation is a testament to our passion
                            for herbalism and culinary artistry.
                        </li>
                        <li class="section--apart__item">
                            <strong>Wellness and Flavor Fusion</strong>: At
                            Herbalist, we believe that wellness and flavor
                            should go hand in hand. Our recipes are designed to
                            not only satisfy your taste buds but also provide an
                            array of health benefits, making every sip and bite
                            a holistic experience.
                        </li>
                    </ul>
                </div>
                <router-link to="#intro">
                    <svg
                        class="section--apart__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="3rem"
                        height="3rem"
                        viewBox="0 0 24 24">
                        <path
                            d="m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"></path>
                        <path
                            d="m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"></path>
                    </svg>
                </router-link>
            </section>
        </div>
        <!-- ./apart -->
    </div>
</template>

<script setup>
import ItemSwiper from '@/component/ItemSwiper.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const sliderOptions = {
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

<style lang="scss">
@import '@splidejs/vue-splide/css/core';

.wrapper-content {
    display: flex;
    align-items: top;
    margin-top: $m-10;
    gap: $g-16;
    margin-inline: auto;
    &--herb-notes {
        padding-inline: $p-20;
    }
}

.section {
    &__title {
        font-size: $fs-lg;
    }
    &__title--herb-notes {
        text-shadow: $dc-shadow-dark;
    }
}

.section--intro {
    @include bg;
    padding-top: calc($spacing-fixed-header + $p-16);
    padding-bottom: $p-28;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    background-image: url('@img/decor/section/intro/bg.jpg');
    &__suptitle {
        font-size: $fs-h5;
        font-family: $ff-tertiary;
        text-align: center;
        text-transform: uppercase;
    }
    &__title {
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
        transform: $translateX-half-neg;
        padding-block: $p-4;
        padding-inline: $p-8;
        border-radius: $br-2;
        text-transform: uppercase;
        color: $c-grey-500;
        font-size: $fs-medium;
        transition: $tr-basic;
        background-color: lighten($c-grey-50, 13%);
        color: $c-grey-900;
        font-family: $ff-tertiary;
        &:hover {
            background-color: #edeeac;
        }
    }
}

.section--popular {
    min-height: 100vh;
    @include bg;
    padding-block: $spacing-common;
    // background-image: url('@img/decor/section/popular/bg.jpg');
    &__container-slider {
        max-width: $screen-xl;
        margin-inline: auto;
        padding-inline: $p-6;
    }
    &__slider {
        margin-top: $m-6;
    }
}

.section--feedback {
    display: flex;
    padding-block: $p-0;
    background-color: #ebf1f1;

    &__slider {
        display: flex;
    }
    &__slide {
        padding-block: $p-9;
    }
    &__wrapper {
        display: flex;
        align-items: center;
        gap: $g-10;
    }
    &__bg-wrapper {
        position: relative;
        margin-inline: auto;
        width: 100%;
        height: 100%;
    }
    &__bg {
        @include bg;
        opacity: 12%;
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: url('@img/decor/section/popular/bg.jpg');
    }
    &__avatar {
        @include bg;
        width: 240px;
        height: 240px;
        border-radius: $br-circle;
        &--1 {
            // @supports (
            //     background-image: url('@img/decor/section/feedback/avatar-1.webp')
            // ) {
            //     background-image: url('@img/decor/section/feedback/avatar-1.webp');
            // }
            background-color: $c-placeholder;
            background-image: url('@img/decor/section/feedback/avatar-1.jpg');
        }
        &--2 {
            // @supports (
            //     background-image: url('@img/decor/section/feedback/avatar-2.webp')
            // ) {
            //     background-image: url('@img/decor/section/feedback/avatar-2.webp');
            // }
            background-color: $c-placeholder;
            background-image: url('@img/decor/section/feedback/avatar-2.jpg');
        }
        &--3 {
            // @supports (
            //     background-image: url('@img/decor/section/feedback/avatar-3.webp')
            // ) {
            //     background-image: url('@img/decor/section/feedback/avatar-3.webp');
            // }
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

.section--philosophy {
    padding-block: $spacing-common;
    &__img {
        @include bg;
        width: 400px;
        height: 400px;
        display: block;
        border-radius: $br-6;
        background-color: $c-placeholder;
        background-image: url('@img/decor/section/philosophy/philosophy.jpg');
        box-shadow: $dc-shadow-card;
    }
    &__text {
        line-height: 2;
    }
}

.section--herb-notes {
    min-height: 100vh;
    padding-block: $spacing-common;
    &__wrapper {
        display: flex;
        flex-direction: column;
        margin-inline: auto;
        align-items: center;
        border-radius: $br-6;
    }
    &__wrapper-content {
        background-color: rgba($c-white, 60%);
        border-radius: $br-6;
        padding: $p-5;
        margin-top: $m-6;
        box-shadow: $dc-shadow-card;
    }
    &__bg {
        @include bg;
        // @supports (
        //     background-image: url('@img/decor/herb-notes/bg.webp')
        // ) {
        //     background-image: url('@img/decor/herb-notes/bg.webp');
        // }
        background-image: url('@img/decor/section/herb-notes/bg.jpg');
    }
    &__subtitle {
        font-size: $fs-h5;
        font-weight: 800;
        color: $c-grey-800;
    }
    &__text {
        text-align: justify;
        margin-top: $m-2;
        line-height: 2;
        color: $c-grey-900;
    }
    &__img--1 {
        width: 100%;
        height: 380px;
        object-fit: cover;
        border-radius: $br-6;
        box-shadow: $dc-shadow-card;
    }
    &__img--2 {
        width: 100%;
        height: 260px;
        object-fit: cover;
        border-radius: $br-6;
        box-shadow: $dc-shadow-card;
    }
    &__wrapper-img--1 {
        position: relative;
        width: 100%;
    }
    &__wrapper-img--2 {
        position: relative;
        width: 100%;
    }

    &__overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-radius: $br-6;
        transition: opacity 0.4s ease-in-out;
        background-image: linear-gradient(
            to right,
            rgba(#d6e4f3, 0.52),
            rgba(#fad9a8, 0.73)
        );
        &:hover {
            opacity: 1;
        }
    }
    &__overlay-link {
        font-size: $fs-base;
        padding-block: $p-3;
        padding-inline: $p-4;
        border-radius: $br-full;
        color: rgba(0, 0, 0, 0.854);
        font-weight: 800;
        background-color: rgba($c-white, 70%);
        transition: background-color 0.4s ease-in-out;
        &:hover {
            background-color: rgba($c-white, 100%);
        }
    }
}

.section--apart {
    position: relative;
    min-height: 100vh;
    padding-block: $spacing-common;
    &__img {
        @include bg;
        width: 400px;
        height: 400px;
        display: block;
        border-radius: $br-6;
        background-color: $c-placeholder;
        background-image: url('@img/decor/section/apart/apart.jpg');
        box-shadow: $dc-shadow-card;
    }
    &__list {
        line-height: 2;
        margin-bottom: 11rem;
    }
    &__item {
        margin-top: $m-6;
        &:first-child {
            margin-top: $m-0;
        }
        position: relative;
        padding-left: $p-7;
        &::before {
            position: absolute;
            content: '';
            padding: calc($p-1_5 + 0.125rem);
            border-radius: $br-circle;
            background-color: $c-white;
            top: 0.75rem;
            left: 0;
        }
    }
    &__icon {
        fill: $c-white;
        position: absolute;
        left: 50%;
        bottom: 8%;
        transform: $translateX-half-neg;
        border: 2px solid $c-white;
        padding: 0.1875rem;
        border-radius: $br-circle;
        opacity: $op-80;
        transition: $tr-smooth;
        cursor: pointer;
        &:hover {
            opacity: $op-100;
        }
    }
}

//& media - section
@media (width <= $screen-xxl) {
    .section--intro {
        &__suptitle {
            font-size: $fs-h6;
        }
        &__title {
            font-size: 7rem;
        }
    }
    .wrapper-content {
        flex-direction: column;
    }

    .section--philosophy,
    .section--apart {
        &__img {
            margin-inline: auto;
            max-width: 600px;
            width: 100%;
        }
    }
    .section--herb-notes {
        margin-inline: auto;
        &__img--1,
        &__img--2 {
            height: 450px;
        }
        &__wrapper-content {
            max-width: 800px;
        }
    }
}
@media (width <= $screen-lg) {
    .section--intro {
        &__suptitle {
            font-size: $fs-base;
        }
        &__title {
            font-size: 5rem;
        }
        &__button {
            padding-block: $p-3;
            padding-inline: $p-5;
        }
    }
    .section--feedback {
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
    .section--philosophy,
    .section--apart {
        &__img {
            max-width: 500px;
            width: 100%;
            height: 380px;
        }
    }
    .section--apart {
        &__list {
            margin-bottom: 8rem;
        }
        &__icon {
            bottom: 5%;
        }
    }
    .wrapper-content {
        padding-inline: $p-8;
    }
}
@media (width <= $screen-md) {
    .section--intro {
        &__suptitle {
            font-size: 0.85rem;
        }
        &__title {
            font-size: 4rem;
        }
    }
    .section--philosophy,
    .section--apart {
        &__img {
            max-width: 450px;
        }
    }
    .section--herb-notes {
        &__img--1,
        &__img--2 {
            max-width: 800px;
            width: 100%;
            height: 320px;
        }
    }
}
@media (width <= $screen-sm) {
    .section__title {
        font-size: $fs-h1;
    }
    .wrapper-content {
        padding-inline: 0;
        gap: $g-12;
    }
    .section--philosophy,
    .section--apart {
        &__img {
            max-width: 350px;
            height: 300px;
        }
    }
    .section--herb-notes {
        padding-inline: $p-8;
    }
}

//& media - slider
@media (width <= $screen-xl) {
    .section--popular__container-slider {
        width: $w-full;
        max-width: $container-md;
    }
}
@media (width <= $screen-xl) {
    .section--popular__container-slider {
        padding-inline: $p-12;
    }
}
@media (width <= $screen-md) {
    .section--popular__container-slider {
        max-width: $container-sm;
    }
}
@media (width <= $screen-md) {
    .splide__track {
        max-width: 26rem;
        margin-inline: auto;
    }
}
</style>
