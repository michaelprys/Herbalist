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
import { onMounted } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';

const storeRecipe = useStoreRecipe();

const props = defineProps(['recipe']);

onMounted(() => {
    storeRecipe.onImageLoad();
});
</script>
