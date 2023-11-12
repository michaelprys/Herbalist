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
            <div
                class="section--feedback__avatar section--feedback__avatar--1"></div>
            <div class="section--feedback__overlay"></div>
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
                    recipes. living.
                </p>
                <div class="section--philosophy__img"></div>
            </div>
        </section>
    </div>
    <!-- ./philosophy -->

    <section class="section section--feedback">
        <div class="container">
            <div
                class="section--feedback__avatar section--feedback__avatar--2"></div>
        </div>
    </section>
    <!-- ./feedback -->

    <div class="container">
        <section class="section section--apart">
            <h3 class="section__title">What Sets Us Apart</h3>
            <div class="wrapper-content">
                <div class="section--apart__img"></div>
                <ul class="section--apart__list">
                    <li class="section--apart__item">
                        <strong>Quality Ingredients</strong>: We source the
                        finest herbs and botanicals to ensure the highest
                        quality in every recipe. Our commitment to excellence
                        begins with the selection of premium ingredients that
                        reflect our dedication to your well-being.
                    </li>
                    <li class="section--apart__item">
                        <strong>Expertly Curated Recipes</strong>: Our team of
                        experienced herbalists and chefs work in harmony to
                        bring you recipes that not only taste exceptional but
                        also harness the natural healing properties of herbs.
                        Each creation is a testament to our passion for
                        herbalism and culinary artistry.
                    </li>
                    <li class="section--apart__item">
                        <strong>Wellness and Flavor Fusion</strong>: At
                        Herbalist, we believe that wellness and flavor should go
                        hand in hand. Our recipes are designed to not only
                        satisfy your taste buds but also provide an array of
                        health benefits, making every sip and bite a holistic
                        experience.
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <!-- ./apart -->
</template>

<script setup>
import ItemSwiper from '@/component/ItemSwiper.vue';
</script>

<style lang="scss">
.wrapper-content {
    display: flex;
    align-items: top;
    margin-top: $m-12;
    gap: $g-16;
}

.section {
    padding-block: $spacing-common;
    &__title {
        // text-shadow: $dc-shadow-dark;
        font-size: $fs-lg;
    }
}

.section--about {
    &__text {
        font-size: $fs-h5;
        line-height: 2;
        margin-top: $m-10;
    }
}

.section--popular {
    padding-top: $p-0;
}

.section--feedback {
    background-color: #ddf2ed;
    &__overlay {
        @include bg;
        background-image: url('@img/decor/feedback/overlay.jpg');
    }
    &__avatar {
        @include bg;
        width: 240px;
        height: 240px;
        border-radius: $br-circle;

        &--1 {
            // @supports (
            //     background-image: url('@img/decor/feedback/avatar/avatar-1.webp')
            // ) {
            //     background-image: url('@img/decor/feedback/avatar/avatar-1.webp');
            // }
            background-color: $c-placeholder;
            background-image: url('@img/decor/feedback/avatar/avatar-1.jpg');
        }
        &--2 {
            // @supports (
            //     background-image: url('@img/decor/feedback/avatar/avatar-1.webp')
            // ) {
            //     background-image: url('@img/decor/feedback/avatar/avatar-1.webp');
            // }
            background-color: $c-placeholder;
            background-image: url('@img/decor/feedback/avatar/avatar-1.jpg');
        }
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
    }
    &__text {
        font-size: $fs-h5;
        line-height: 2;
    }
}

.section--apart {
    &__img {
        @include bg;
        width: 700px;
        height: 400px;
        display: block;
        border-radius: $br-6;
        background-color: $c-placeholder;
        background-image: url('@img/decor/section/apart/apart.jpg');
    }
    &__list {
        font-size: $fs-h5;
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

//* media
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
}
@media (width <= $screen-md) {
    .section__title {
        font-size: $fs-h1;
    }
    .section--philosophy,
    .section--apart {
        &__img {
            height: 300px;
        }
    }
}
</style>
