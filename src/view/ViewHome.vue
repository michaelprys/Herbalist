<template>
    <div class="container">
        <section class="section section--popular">
            <h1 class="section__title">Popular recipes</h1>
            <ItemSwiper />
        </section>
    </div>
    <div class="section__wrapper">
        <div class="container">
            <section class="section section--about" id="about">
                <h2 class="section__title">About</h2>
                <p class="section__description">
                    Welcome to Herbalist, your ultimate destination for
                    exploring the enchanting world of herbal concoctions! At
                    Herbalist, we believe in harnessing the power of nature to
                    create delightful and nourishing experiences for your body
                    and soul. Our passion lies in curating a collection of
                    exquisite herbal tea, invigorating herbal drinks, and
                    delectable herbal food recipes that not only tantalize your
                    taste buds but also promote overall well-being.
                </p>
            </section>
        </div>
    </div>
    <div class="section__wrapper">
        <section class="section section--feedback">
            <div class="container">
                <picture>
                    <source
                        srcset="@img/avatar/avatar-1.avif"
                        type="image/avif" />
                    <source
                        srcset="@img/avatar/avatar-1.webp"
                        type="image/webp" />
                    <img
                        class="section__avatar"
                        src="@img/avatar/avatar-1.jpg"
                        loading="lazy"
                        alt="avatar 1" />
                </picture>
            </div>
        </section>
    </div>
    <div class="section__wrapper">
        <div class="container">
            <section class="section section--philosophy">
                <h3 class="section__title">Our philosophy</h3>
                <p class="section__description">
                    Herbalist is rooted in the belief that nature provides us
                    with an abundance of healing herbs and botanicals that can
                    be artfully combined to create beverages and dishes that are
                    both delicious and healthful. We strive to celebrate the
                    bountiful gifts of the earth by sharing recipes that embrace
                    the holistic benefits of herbs, fostering a harmonious
                    balance between flavor and wellness.
                </p>
            </section>
        </div>
    </div>
    <div class="section__wrapper">
        <section class="section section--feedback">
            <div class="container">
                <picture>
                    <source
                        srcset="@img/avatar/avatar-3.avif"
                        type="image/avif" />
                    <source
                        srcset="@img/avatar/avatar-3.webp"
                        type="image/webp" />
                    <img
                        class="section__avatar"
                        src="@img/avatar/avatar-3.jpg"
                        loading="lazy"
                        alt="avatar 3" />
                </picture>
            </div>
        </section>
    </div>
    <div class="section__wrapper">
        <div class="container">
            <section class="section section--sets-us">
                <h3 class="section__title">What sets us apart</h3>
                <ul class="section__description">
                    <li class="section__description-item">
                        <i>Quality Ingredients</i>: We source the finest herbs
                        and botanicals to ensure the highest quality in every
                        recipe. Our commitment to excellence begins with the
                        selection of premium ingredients that reflect our
                        dedication to your well-being.
                    </li>
                    <li class="section__description-item">
                        <i>Expertly Curated Recipes</i>: Our team of experienced
                        herbalists and chefs work in harmony to bring you
                        recipes that not only taste exceptional but also harness
                        the natural healing properties of herbs. Each creation
                        is a testament to our passion for herbalism and culinary
                        artistry.
                    </li>
                    <li class="section__description-item">
                        <i>Wellness and Flavor Fusion</i>: At Herbalist, we
                        believe that wellness and flavor should go hand in hand.
                        Our recipes are designed to not only satisfy your taste
                        buds but also provide an array of health benefits,
                        making every sip and bite a holistic experience.
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script setup>
import ItemSwiper from '@/component/ItemSwiper.vue';
</script>

<style lang="scss">
.section {
    padding-block: $p-layout;
    padding-inline: $p-12;
    scroll-behavior: smooth;
    &__title {
        text-shadow: $dc-shadow-dark;
        font-size: $fs-lg;
    }
    &__description {
        font-family: $ff-primary;
        font-size: $fs-h6;
        margin-top: $m-8;
        &:nth-child(n + 5) {
            margin-left: $m-12;
        }
    }
    &__description-item {
        margin-top: $m-5;
        list-style: circle;
    }
    &__avatar {
        width: 240px;
        height: 240px;
        border-radius: $br-circle;
        object-fit: cover;
    }
}

.section--popular {
    margin-top: calc($h-header);
}

.section--feedback {
    display: flex;
    justify-content: start;
    gap: $g-16;
    min-height: $h-6;
    padding-block: $p-16;
    background-color: #54ecc4;
}

@media (width <= $screen-lg) {
    .section--feedback {
        flex-wrap: wrap;
    }
}
</style>
