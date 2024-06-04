<template>
    <section class="section" id="popular">
        <div class="container">
            <h2 class="section__title">Popular recipes</h2>
            <ItemCarousel class="carousel" />
        </div>
    </section>
</template>

<script setup lang="ts">
import ItemCarousel from '@/components/common/ItemCarousel.vue';
</script>

<style scoped lang="scss">
.carousel {
    max-width: $screen-xl;
    margin-inline: auto;
    padding-inline: $p-6;
}

@media (width < $screen-xl) {
    .carousel {
        margin-inline: auto;
        max-width: 53.125rem;
    }
    .section {
        &__title {
            font-size: $fs-h1;
        }
    }
}
@media (width < $screen-md) {
    .carousel {
        max-width: 26.25rem;
    }
}

@media (width < 29.375rem) {
    .carousel {
        padding-inline: $p-0;
    }
}
</style>
