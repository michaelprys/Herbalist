<template>
    <section class="section" id="about">
        <div class="container">
            <h3 class="section__title">Our Philosophy</h3>
            <div class="content">
                <p class="content__text">
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
                <div class="content__img"></div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

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
    gap: $g-20;
    &__text {
        line-height: 2;
    }
    &__img {
        @include bg;
        width: 400px;
        height: 400px;
        display: block;
        border-radius: $br-6;
        background-color: $c-placeholder;
        @supports (
            background-image: url('@img/section/philosophy/philosophy.avif')
        ) {
            background-image: url('@img/section/philosophy/philosophy.avif');
        }
        background-image: url('@img/section/philosophy/philosophy.jpg');
        box-shadow: $dc-shadow-card;
    }
}

@media (width <= $screen-lg) {
    .content {
        flex-direction: column;
        gap: $g-12;
        &__img {
            max-width: 31.25rem;
            width: 100%;
            height: 380px;
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
@media (width <= $screen-sm) {
    .content {
        &__img {
            height: 300px;
        }
    }
}
</style>
