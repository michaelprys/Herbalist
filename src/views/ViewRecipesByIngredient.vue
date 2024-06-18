<template>
    <section class="section">
        <div class="container">
            <div class="list-wrapper">
                <RouterView :totalPages="totalPages" :page="page" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, computed, reactive, watchEffect } from 'vue';
import { useStoreRecipe } from '@/stores/storeRecipe';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const storeRecipe = useStoreRecipe();

interface Page {
    number: number;
    size: number;
}

const page = reactive<Page>({
    number: parseInt(route.query.page as string) || 1,
    size: 32,
});

const totalPages = computed(() => {
    return Math.ceil(storeRecipe.ingredientCount / page.size);
});

const loadIngredients = async () => {
    await storeRecipe.loadPaginatedIngredients(page.number, page.size);
};

watchEffect(async () => {
    const pageNumber = parseInt(route.query.page as string) || 1;
    if (pageNumber < 1) {
        router.push({ query: { page: 1 } });
    } else {
        page.number = pageNumber;
        await loadIngredients();
    }
});

onMounted(async () => {
    await storeRecipe.loadIngredientsCount();
});
</script>

<style scoped lang="scss">
.container {
    padding-top: 6.5rem;
}

.section {
    min-height: 100svh;
    @include bg;
    @supports (background-image: url('@img/section/recipe-details/bg.avif')) {
        background-image: url('@img/section/recipe-details/bg.avif');
    }
    background-image: url('@img/section/recipe-details/bg.jpg');
    background-attachment: fixed;
}

.list-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 46.5rem;
    background-color: #ffffffda;
    margin-inline: auto;
    border-radius: $br-4;
    box-shadow: $dc-shadow-card;
    padding: $p-10;
    color: #4a5f72;
}

@media (width <= $screen-sm) {
    .list-wrapper {
        padding-inline: $p-5;
    }
}
</style>
