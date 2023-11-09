<template>
    <picture>
        <source :srcset="recipe.getSrcset('.avif')" type="image/avif" />
        <source :srcset="recipe.getSrcset('.webp')" type="image/webp" />
        <img
            class="card__image"
            :src="recipe.getSrc('.jpg')"
            :alt="recipe.alt"
            width="15.625rem"
            loading="lazy" />
    </picture>
</template>

<script setup>
const props = defineProps(['recipe']);
</script>
