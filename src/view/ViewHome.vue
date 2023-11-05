<template>
    <section class="section section--recipes">
        <h1 class="section__title">Popular recipes</h1>
        <div class="container-swiper">
            <ItemSwiper></ItemSwiper>
        </div>
    </section>
</template>

<script setup>
import ItemSwiper from '@/component/ItemSwiper.vue';
</script>

<style lang="scss">
.section {
    max-width: 71.6875rem;
    margin-inline: $auto;
    padding-top: $p-12;
    &__title {
        text-shadow: $dc-shadow-dark;
        font-size: $fs-lg;
    }
}
</style>
