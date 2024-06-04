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
import { onMounted, computed, reactive, watch } from 'vue';
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
    number: computed(() => parseInt(route.query.page as string) || 1).value,
    size: 32,
});

const totalPages = computed(() => {
    return Math.ceil(storeRecipe.ingredientCount / page.size);
});

const loadIngredients = async () => {
    await storeRecipe.loadPaginatedIngredients(page.number, page.size);
};

// watchers
watch(
    () => route.query.page,
    newPage => {
        const pageNumber = parseInt(newPage as string);
        if (pageNumber < 1) {
            router.push({ query: { page: 1 } });
        } else {
            loadIngredients();
        }
    },
    { immediate: true }
);
watch(
    () => page.size,
    (newSize: number) => {
        localStorage.setItem('ingredientPageSize', newSize.toString());
        loadIngredients();
    }
);

// hooks
onMounted(async () => {
    await storeRecipe.loadIngredientsCount();
});
</script>

<style scoped lang="scss">
.container {
    padding-top: $h-header;
}

.section {
    min-height: 100svh;
    @include bg;
    @supports (background-image: url('@img/section/recipe-details/bg.avif')) {
        background-image: url('@img/section/recipe-details/bg.avif');
    }
    background-image: url('@img/section/recipe-details/bg.jpg');
}

.list-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 45.3212rem;
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
