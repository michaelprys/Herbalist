<template>
    <section class="section">
        <div class="container">
            <h2 class="section__title">What Sets Us Apart</h2>
            <div class="content">
                <div class="content__wrapper">
                    <div class="content__img"></div>
                    <ul class="content__list">
                        <li class="content__item">
                            <strong>Quality Ingredients</strong>: We source the
                            finest herbs and botanicals to ensure the highest
                            quality in every recipe. Our commitment to
                            excellence begins with the selection of premium
                            ingredients that reflect our dedication to your
                            well-being.
                        </li>
                        <li class="content__item">
                            <strong>Expertly Curated Recipes</strong>: Our team
                            of experienced herbalists and chefs work in harmony
                            to bring you recipes that not only taste exceptional
                            but also harness the natural healing properties of
                            herbs. Each creation is a testament to our passion
                            for herbalism and culinary artistry.
                        </li>
                        <li class="content__item">
                            <strong>Wellness and Flavor Fusion</strong>: At
                            Herbalist, we believe that wellness and flavor
                            should go hand in hand. Our recipes are designed to
                            not only satisfy your taste buds but also provide an
                            array of health benefits, making every sip and bite
                            a holistic experience.
                        </li>
                    </ul>
                </div>
                <router-link class="content__link" to="#intro">
                    <IconScrollBack class="content__icon" />
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import IconScrollBack from '@/components/icons/IconScrollBack.vue';
</script>

<style scoped lang="scss">
.section {
    text-align: justify;
    hyphens: auto;
    &__title {
        font-size: $fs-lg;
    }
}

.content {
    display: flex;
    flex-direction: column;
    &__wrapper {
        display: flex;

        gap: $g-16;
    }
    &__img {
        @include bg;
        max-width: 25rem;
        width: 100%;
        height: 25rem;
        display: block;
        border-radius: $br-6;
        background-color: $c-placeholder;
        @supports (background-image: url('@img/section/apart/apart.avif')) {
            background-image: url('@img/section/apart/apart.avif');
        }
        background-image: url('@img/section/apart/apart.jpg');
        box-shadow: $dc-shadow-card;
    }
    &__list {
        line-height: 2;
        margin-bottom: $m-44;
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
            padding: $p-2;
            border-radius: $br-round;
            background-color: $c-white;
            top: 0.75rem;
            left: 0;
        }
    }
    &__link {
        margin-inline: auto;
    }
    &__icon {
        fill: $c-white;
        border: $bw-2 solid $c-white;
        padding: $p-1_5;
        border-radius: $br-round;
        opacity: $op-80;
        transition: opacity $tr-smooth;
        cursor: pointer;
        &:hover {
            opacity: $op-100;
        }
    }
}

@media (width <= $screen-lg) {
    .content {
        flex-direction: column;
        gap: $g-12;
        &__wrapper {
            flex-direction: column;
        }
        &__img {
            margin-inline: auto;
        }
    }
}

@media (width <= $screen-md) {
    .section {
        &__title {
            font-size: $fs-h1;
        }
    }
}
</style>
