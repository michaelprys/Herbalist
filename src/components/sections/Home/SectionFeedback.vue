<template>
    <section class="section" ref="target">
        <div class="section__bg"></div>
        <Swiper class="swiper" v-bind="swiperOptions" @swiper="onSwiper">
            ``<SwiperSlide class="swiper__slide">
                <div class="swiper__wrapper">
                    <div class="swiper__avatar swiper__avatar--1"></div>
                    <div class="swiper__content">
                        <blockquote class="swiper__quote">
                            "These recipes have proven to be transformative for
                            individuals, contributing to their well-being in
                            profound ways."
                        </blockquote>
                        <span class="swiper__name"
                            >Maija Ahnger, Herbalist
                        </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide class="swiper__slide">
                <div class="swiper__wrapper">
                    <div class="swiper__avatar swiper__avatar--2"></div>
                    <div class="swiper__content">
                        <blockquote class="swiper__quote">
                            "Explore adaptogenic herbs like ashwagandha or
                            rhodiola to help your body adapt to stress and
                            promote overall balance."
                        </blockquote>
                        <span class="swiper__name"
                            >Akari Fujimura, Naturopath
                        </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide class="swiper__slide">
                <div class="swiper__wrapper">
                    <div class="swiper__avatar swiper__avatar--3"></div>
                    <div class="swiper__content">
                        <blockquote class="swiper__quote">
                            "Consider calendula salves or creams for skin
                            irritations and minor wounds due to its soothing and
                            healing properties."
                        </blockquote>
                        <span class="swiper__name">Yu Ming, Herbalist </span>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup lang="ts">
import { watchEffect, ref, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

const swiperOptions = {
    modules: [Autoplay],
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    loop: true,
};

const target = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const onSwiper = swiper => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            isVisible.value = entry.isIntersecting;
            if (isVisible.value) {
                swiper.autoplay.start();
            } else {
                swiper.autoplay.stop();
            }
        },
        { threshold: 0 }
    );
    if (target.value) {
        observer.observe(target.value);
    } else {
        observer.unobserve(target.value);
    }
};
</script>

<style scoped lang="scss">
.section {
    background-color: #ebf1f1;
    position: relative;
    margin-inline: auto;
    width: 100%;
    height: 100%;
    padding-block: $p-9;
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

.swiper {
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
        width: 250px;
        height: 250px;
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
        font-size: 1.3125rem;
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
    .swiper {
        max-width: 72.1875rem;
        &__slide {
            min-width: 72.1875rem;
        }
    }
}
@media (width <= $screen-xl) {
    .swiper {
        max-width: 62.1875rem;
        &__slide {
            min-width: 62.1875rem;
        }
    }
}
@media (width <= $screen-lg) {
    .swiper {
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
    .swiper {
        max-width: $container-sm;
        &__slide {
            min-width: $container-sm;
        }
    }
}

@media (width <= $screen-sm) {
    .swiper {
        max-width: 25rem;
        &__slide {
            min-width: 25rem;
        }
    }
}
</style>
