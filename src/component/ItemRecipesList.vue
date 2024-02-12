<template>
    <div class="recipes-list">
        <h1 class="recipes-list__title">Recipes by ingredient</h1>
        <ul class="recipes-list__list">
            <li>Recipe</li>
        </ul>
    </div>
</template>

<script setup>
import { useStoreRecipe } from '@/store/storeRecipe';
const storeRecipe = useStoreRecipe();

const props = defineProps(['totalPages', 'page']);
</script>

<style lang="scss"></style>
