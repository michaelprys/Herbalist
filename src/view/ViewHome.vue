<template>
    <div class="container">
        <section class="section section--popular">
            <h1 class="section__title">Popular recipes</h1>
            <ItemSwiper />
        </section>
    </div>
    <!-- ./popular -->

    <div class="container">
        <section class="section section--about" id="about">
            <h2 class="section__title">About Us</h2>
            <p class="section--about__text">
                Welcome to Herbalist, your ultimate destination for exploring
                the enchanting world of herbal concoctions! At Herbalist, we
                believe in harnessing the power of nature to create delightful
                and nourishing experiences for your body and soul. Our passion
                lies in curating a collection of exquisite herbal tea,
                invigorating herbal drinks, and delectable herbal food recipes
                that not only tantalize your taste buds but also promote overall
                well-being.
            </p>
        </section>
    </div>
    <!-- ./about -->

    <section class="section section--feedback">
        <div class="container">
            <Splide class="slider" :options="options">
                <SplideSlide class="slider__slide"
                    ><div class="section--feedback__wrapper">
                        <div
                            class="section--feedback__avatar section--feedback__avatar--1"></div>
                        <div class="section--feedback__content">
                            <blockquote class="section--feedback__quote">
                                "These recipes have proven to be transformative
                                for individuals, contributing to their
                                well-being in profound ways."
                            </blockquote>
                            <span class="section--feedback__name"
                                >Maija Ahnger, Herbalist
                            </span>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide class="slider__slide"
                    ><div class="section--feedback__wrapper">
                        <div
                            class="section--feedback__avatar section--feedback__avatar--2"></div>
                        <div class="section--feedback__content">
                            <blockquote class="section--feedback__quote">
                                "Explore adaptogenic herbs like ashwagandha or
                                rhodiola to help your body adapt to stress and
                                promote overall balance."
                            </blockquote>
                            <span class="section--feedback__name"
                                >Akari Fujimura, Naturopath
                            </span>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide class="slider__slide"
                    ><div class="section--feedback__wrapper">
                        <div
                            class="section--feedback__avatar section--feedback__avatar--3"></div>
                        <div class="section--feedback__content">
                            <blockquote class="section--feedback__quote">
                                "Consider calendula salves or creams for skin
                                irritations and minor wounds due to its soothing
                                and healing properties."
                            </blockquote>
                            <span class="section--feedback__name"
                                >Yu Ming, Herbalist
                            </span>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </section>
    <!-- ./feedback -->

    <div class="container">
        <section class="section section--philosophy">
            <h3 class="section__title">Our Philosophy</h3>
            <div class="wrapper-content">
                <p class="section--philosophy__text">
                    Herbalist is rooted in the belief that nature provides us
                    with an abundance of healing herbs and botanicals that can
                    be artfully combined to create beverages and dishes that are
                    both delicious and healthful. We strive to celebrate the
                    bountiful gifts of the earth by sharing recipes that embrace
                    the holistic benefits of herbs. Our mission is to inspire a
                    deeper connection with the natural world, promoting
                    well-being through the transformative power of plant-based
                    recipes.
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
                <div class="wrapper-content">
                    <div class="section--herb-notes__wrapper">
                        <div
                            class="section--herb-notes__wrapper-img section--herb-notes__wrapper-img--1">
                            <div class="section--herb-notes__overlay">
                                <a href="#">
                                    <span
                                        class="section--herb-notes__overlay-link"
                                        >See recipes with tumeric</span
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
                                The Benefits of Tumeric
                            </h4>
                            <p class="section--herb-notes__text">
                                Turmeric, derived from the Curcuma longa plant,
                                is a powerhouse of health benefits. Its key
                                active compound, curcumin, lends a golden hue
                                and a range of advantages.
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
                                Ginger, celebrated for its distinctive flavor,
                                brings more than just taste to the table with a
                                myriad of health benefits.
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
            <div class="section--apart__wrapper">
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
            </div>
        </section>
    </div>
    <!-- ./apart -->
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const options = {
    arrows: false,
    flickPower: 300,
    gap: '2.5rem',
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    type: 'loop',
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
    // max-width: 75rem;
}

.section {
    padding-block: $spacing-common;
    &__title {
        font-size: $fs-lg;
    }
    &__title--herb-notes {
        text-shadow: $dc-shadow-dark;
    }
}

.section--about {
    &__text {
        line-height: 2;
        margin-top: $m-10;
    }
}

.section--popular {
    padding-top: $p-0;
}

.section--feedback {
    padding-block: 0;
    display: flex;
    background-color: #e8eeee;
    user-select: none;
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
            // @supports (
            //     background-image: url('@img/decor/section/feedback/avatar/avatar-1.webp')
            // ) {
            //     background-image: url('@img/decor/section/feedback/avatar/avatar-1.webp');
            // }
            background-color: $c-placeholder;
            background-image: url('@img/decor/section/feedback/avatar/avatar-1.jpg');
        }
        &--2 {
            // @supports (
            //     background-image: url('@img/decor/section/feedback/avatar/avatar-2.webp')
            // ) {
            //     background-image: url('@img/decor/section/feedback/avatar/avatar-2.webp');
            // }
            background-color: $c-placeholder;
            background-image: url('@img/decor/section/feedback/avatar/avatar-2.jpg');
        }
        &--3 {
            // @supports (
            //     background-image: url('@img/decor/section/feedback/avatar/avatar-3.webp')
            // ) {
            //     background-image: url('@img/decor/section/feedback/avatar/avatar-3.webp');
            // }
            background-color: $c-placeholder;
            background-image: url('@img/decor/section/feedback/avatar/avatar-3.jpg');
        }
    }
    &__quote,
    &__name {
        color: $c-grey-500;
        font-style: italic;
    }
    &__quote {
        position: relative;
        font-family: $ff-italic;
        &::after {
            position: absolute;
            content: '';
            height: $h-0_5;
            width: $w-16;
            top: 100%;
            margin-top: $m-3_5;
            background-color: $c-pink;
        }
    }
    &__name {
        display: block;
        margin-top: $m-7;
        font-family: $ff-italic;
    }
}

.section--philosophy {
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
        font-size: $fs-h6;
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
            rgba(#ddd6f3, 0.52),
            rgba(#faaca8, 0.73)
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
        color: rgba(118, 49, 56, 0.854);
        font-weight: 800;
        background-color: rgba($c-white, 70%);
        transition: background-color 0.4s ease-in-out;
        &:hover {
            background-color: rgba($c-white, 100%);
        }
    }
}

.section--apart {
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
}

// slider
.slider {
    display: flex;
    &__slide {
        padding-block: $p-12;
    }
}

//& media
@media (width <= $screen-xxl) {
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
}
@media (width <= $screen-md) {
    .section__title {
        font-size: $fs-h1;
    }
    .section--philosophy,
    .section--apart {
        &__img {
            height: 260px;
        }
    }

    .section--herb-notes {
        margin-inline: auto;
        &__img--1,
        &__img--2 {
            max-width: 800px;
            width: 100%;
            height: 250px;
        }
    }
}
</style>
