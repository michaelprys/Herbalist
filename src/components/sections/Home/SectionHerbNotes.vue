<template>
    <section class="section">
        <div class="container">
            <h3 class="section__title">Herb Notes</h3>
            <div class="content-wrapper">
                <div class="content">
                    <div class="content__inner">
                        <div class="content__overlay">
                            <router-link
                                :to="{
                                    name: 'ingredientRecipes',
                                    params: {
                                        ingredientName: 'Turmeric',
                                    },
                                }"
                                class="content__link"
                                >See recipes with turmeric
                            </router-link>
                        </div>
                        <picture>
                            <source
                                srcset="@img/section/herb-notes/turmeric.avif"
                                type="image/avif" />
                            <img
                                class="content__img--1"
                                src="@img/section/herb-notes/turmeric.jpg"
                                loading="lazy"
                                alt="tumeric" />
                        </picture>
                    </div>
                    <div class="content__description">
                        <h4 class="content__title">The Benefits of Turmeric</h4>
                        <p class="content__text">
                            Turmeric, derived from the Curcuma longa plant, is a
                            powerhouse of health benefits. Its key active
                            compound, curcumin, lends a golden hue and a range
                            of advantages.
                        </p>
                    </div>
                </div>

                <div class="content content--second">
                    <div class="content__inner">
                        <div class="content__overlay">
                            <router-link
                                class="content__link"
                                :to="{
                                    name: 'ingredientRecipes',
                                    params: {
                                        ingredientName: 'Ginger',
                                    },
                                }">
                                See recipes with ginger
                            </router-link>
                        </div>
                        <picture>
                            <source
                                srcset="@img/section/herb-notes/ginger.avif"
                                type="image/avif" />
                            <img
                                class="content__img--2"
                                src="@img/section/herb-notes/ginger.jpg"
                                loading="lazy"
                                alt="ginger" />
                        </picture>
                    </div>
                    <div class="content__description">
                        <h4 class="content__title">Ginger's Positive Impact</h4>
                        <p class="content__text">
                            Ginger, celebrated for its distinctive flavor,
                            brings more than just taste to the table with a
                            myriad of health benefits.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.section {
    @include bg;
    @supports (background-image: url('@img/section/herb-notes/bg.avif')) {
        background-image: url('@img/section/herb-notes/bg.avif');
    }
    background-image: url('@img/section/herb-notes/bg.jpg');
    &__title {
        font-size: $fs-lg;
        text-shadow: 8px 8px 18px #000;
    }
}

.content-wrapper {
    display: flex;
    margin-inline: auto;
    gap: $g-12;
    max-width: 72rem;
}

.content {
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    align-items: center;
    border-radius: $br-6;
    max-width: 40rem;
    &--second {
        max-width: 30rem;
    }
    &__inner {
        position: relative;
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
        &:hover,
        &:focus-within {
            opacity: 1;
        }
    }
    &__link {
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
    &__description {
        background-color: rgba($c-white, 60%);
        border-radius: $br-6;
        padding: $p-5;
        margin-top: $m-6;
        box-shadow: $dc-shadow-card;
    }
    &__img--1 {
        object-fit: cover;
        border-radius: $br-6;
        box-shadow: $dc-shadow-card;
        margin-inline: auto;
    }
    &__img--2 {
        object-fit: cover;
        border-radius: $br-6;
        box-shadow: $dc-shadow-card;
        margin-inline: auto;
    }
    &__title {
        font-size: $fs-h5;
        font-weight: 800;
        color: $c-grey-800;
    }
    &__text {
        text-align: justify;
        hyphens: auto;
        margin-top: $m-2;
        line-height: 2;
        color: $c-grey-900;
    }
}

@media (width <= $screen-xl) {
    .content-wrapper {
        flex-direction: column;
        max-width: 40rem;
    }
    .content {
        max-width: 100%;
        &--second {
            max-width: 100%;
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
