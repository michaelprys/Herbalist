<template>
    <section class="section">
        <div class="section__bg"></div>
        <vue-horizontal
            class="carousel"
            responsive
            ref="horizontal"
            :button="false"
            @scroll-debounce="onScrollDebounce"
            :displacement="displacement">
            <div class="carousel__slide">
                <div class="carousel__wrapper">
                    <div class="carousel__avatar carousel__avatar--1"></div>
                    <div class="carousel__content">
                        <blockquote class="carousel__quote">
                            "These recipes have proven to be transformative for
                            individuals, contributing to their well-being in
                            profound ways."
                        </blockquote>
                        <span class="carousel__name"
                            >Maija Ahnger, Herbalist
                        </span>
                    </div>
                </div>
            </div>
            <div class="carousel__slide">
                <div class="carousel__wrapper">
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
            </div>
            <div class="carousel__slide">
                <div class="carousel__wrapper">
                    <div class="carousel__avatar carousel__avatar--3"></div>
                    <div class="carousel__content">
                        <blockquote class="carousel__quote">
                            "Consider calendula salves or creams for skin
                            irritations and minor wounds due to its soothing and
                            healing properties."
                        </blockquote>
                        <span class="carousel__name">Yu Ming, Herbalist </span>
                    </div>
                </div>
            </div>
        </vue-horizontal>
    </section>
</template>

<script setup lang="ts">
// import { ref, onMounted, onUnmounted } from 'vue';
// import VueHorizontal from 'vue-horizontal';

// const hasPrev = ref(false);
// const hasNext = ref(false);
// const displacement = ref(1.0);
// const horizontal = ref(null);
// let interval = null;

// const onScrollDebounce = ({ hasNext, hasPrev }) => {
//     hasPrev.value = hasPrev;
//     hasNext.value = hasNext;
// };

// const play = () => {
//     if (!hasNext.value && hasPrev.value) {
//         horizontal.value.scrollToIndex(0);
//         displacement.value = 1.0;
//         return;
//     }

//     if (hasNext.value) {
//         horizontal.value.next();
//         displacement.value = 0.6;
//     }
// };

// onMounted(() => {
//     const observer = new IntersectionObserver(
//         records => {
//             const visible = records.some(record => record.isIntersecting);
//             if (visible) {
//                 interval = setInterval(play, 3000);
//             } else {
//                 clearInterval(interval);
//             }
//         },
//         { rootMargin: '10% 0% 10% 0%', threshold: 1.0 }
//     );

//     observer.observe(horizontal.value.$el);
// });

// onUnmounted(() => {
//     clearInterval(interval);
// });
</script>

<style scoped lang="scss">
.section {
    background-color: #ebf1f1;
    position: relative;
    margin-inline: auto;
    width: 100%;
    height: 100%;
    padding-block: $p-6;

    &__bg {
        @include bg;
        position: absolute;
        top: 0;
        opacity: 12%;
        width: 100%;
        height: 100%;
        @supports (background-image: url('@img/section/popular/bg.avif')) {
            background-image: url('@img/section/popular/bg.avif');
        }
        background-image: url('@img/section/popular/bg.jpg');
    }
}

.carousel {
    max-width: 87.1875rem;
    margin-inline: auto;
    &__slide {
        min-width: 87.1875rem;
    }
    &__wrapper {
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        gap: $g-10;
    }

    &__avatar {
        @include bg;
        width: 240px;
        height: 240px;
        border-radius: $br-round;
        &--1 {
            @supports (
                background-image: url('@img/section/feedback/avatar-1.avif')
            ) {
                background-image: url('@img/section/feedback/avatar-1.avif');
            }
            background-color: $c-placeholder;
            background-image: url('@img/section/feedback/avatar-1.jpg');
        }
        &--2 {
            @supports (
                background-image: url('@img/section/feedback/avatar-2.avif')
            ) {
                background-image: url('@img/section/feedback/avatar-2.avif');
            }
            background-color: $c-placeholder;
            background-image: url('@img/section/feedback/avatar-2.jpg');
        }
        &--3 {
            @supports (
                background-image: url('@img/section/feedback/avatar-3.avif')
            ) {
                background-image: url('@img/section/feedback/avatar-3.avif');
            }
            background-color: $c-placeholder;
            background-image: url('@img/section/feedback/avatar-3.jpg');
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

@media (width <= $screen-xxl) {
    .carousel {
        max-width: 72.1875rem;
        &__slide {
            min-width: 72.1875rem;
        }
    }
}
@media (width <= $screen-xl) {
    .carousel {
        max-width: 62.1875rem;
        &__slide {
            min-width: 62.1875rem;
        }
    }
}
@media (width <= $screen-lg) {
    .carousel {
        &__wrapper {
            flex-direction: column;
        }
        max-width: 52.1875rem;
        &__slide {
            min-width: 52.1875rem;
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
@media (width <= 57.5rem) {
    .carousel {
        max-width: $container-sm;
        &__slide {
            min-width: $container-sm;
        }
    }
}
@media (width <= 46.25rem) {
    .carousel {
        max-width: 33.75rem;
        &__slide {
            min-width: 33.75rem;
        }
    }
}
@media (width <= $screen-sm) {
    .carousel {
        max-width: 25rem;
        &__slide {
            min-width: 25rem;
        }
    }
}
@media (width <= 480px) {
    .carousel {
        max-width: 20rem;
        &__slide {
            min-width: 20rem;
        }
    }
}
@media (width <= 23.75rem) {
    .carousel {
        max-width: 17rem;
        &__slide {
            min-width: 17rem;
        }
    }
}
</style>
