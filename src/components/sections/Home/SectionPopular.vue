<template>
    <section class="section" id="popular">
        <div class="container">
            <h2 class="section__title">Popular recipes</h2>
            <ItemCarousel class="carousel" />
        </div>
    </section>
</template>

<script setup>
import ItemCarousel from '@/components/common/ItemCarousel.vue';
</script>

<style scoped lang="scss">
.section {
    min-height: 100svh;
    padding-block: $spacing-common;
    &__title {
        font-size: $fs-lg;
    }
}

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
}
@media (width < $screen-md) {
    .carousel {
        max-width: 26.25rem;
    }
}
</style>
