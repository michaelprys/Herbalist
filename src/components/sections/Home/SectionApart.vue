<template>
    <section class="section">
        <div class="container">
            <h2 class="section__title">What Sets Us Apart</h2>
            <div class="content">
                <div class="content__img"></div>
                <ul class="content__list">
                    <li class="content__item">
                        <strong>Quality Ingredients</strong>: We source the
                        finest herbs and botanicals to ensure the highest
                        quality in every recipe. Our commitment to excellence
                        begins with the selection of premium ingredients that
                        reflect our dedication to your well-being.
                    </li>
                    <li class="content__item">
                        <strong>Expertly Curated Recipes</strong>: Our team of
                        experienced herbalists and chefs work in harmony to
                        bring you recipes that not only taste exceptional but
                        also harness the natural healing properties of herbs.
                        Each creation is a testament to our passion for
                        herbalism and culinary artistry.
                    </li>
                    <li class="content__item">
                        <strong>Wellness and Flavor Fusion</strong>: At
                        Herbalist, we believe that wellness and flavor should go
                        hand in hand. Our recipes are designed to not only
                        satisfy your taste buds but also provide an array of
                        health benefits, making every sip and bite a holistic
                        experience.
                    </li>
                </ul>
            </div>
            <router-link to="#intro">
                <svg
                    class="content__icon"
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
        </div>
    </section>
</template>

<script setup></script>

<style scoped lang="scss">
.section {
    position: relative;
    text-align: justify;
    hyphens: auto;
    &__title {
        font-size: $fs-lg;
    }
}

.content {
    display: flex;
    gap: $g-16;
    &__img {
        @include bg;
        max-width: 25rem;
        width: 100%;
        height: 400px;
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
            top: 12px;
            left: 0;
        }
    }
    &__icon {
        fill: $c-white;
        position: absolute;
        left: 50%;
        bottom: 8%;
        transform: translateX(-50%);
        border: 2px solid $c-white;
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
