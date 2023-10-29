<template>
    <div class="skeleton" style="width: 22.2292rem; height: 15rem"></div>
    <div class="card__content card__content--skeleton">
        <div style="height: 32px; width: 35%">
            <div class="skeleton skeleton-text" style="height: 20px"></div>
        </div>
        <div style="height: 106px">
            <div style="padding-top: 0.75rem"></div>
            <div style="height: 106px">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
            </div>
        </div>
        <div class="skeleton card__link" style="height: 44px"></div>
    </div>
</template>

<script setup>
import ItemBlurHash from '@/components/SkeletonLoaders/ItemBlurHash.vue';
</script>

<style>
.card__content--skeleton {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
