<template>
    <section class="section">
        <div class="container">
            <div class="list-wrapper">
                <RouterView :totalPages="totalPages" :page="page" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, computed, reactive, watch, onBeforeUnmount } from 'vue';
import { useStoreRecipe } from '@/stores/storeRecipe';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const storeRecipe = useStoreRecipe();

const page = reactive({
    number: computed(() => parseInt(route.query.page) || 1),
    size: 32,
});

const handleResize = () => {
    const mq1535 = window.matchMedia('(width <= 1535px) and (width > 1280px)');
    const mq1280 = window.matchMedia('(width <= 1280px) and (width > 640px)');
    const mq640 = window.matchMedia('(width <= 640px)');

    if (mq1535.matches) {
        page.size = 28;
    } else if (mq1280.matches) {
        page.size = 16;
    } else if (mq640.matches) {
        page.size = 8;
    } else {
        page.size = 32;
    }
};

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
        const pageNumber = parseInt(newPage);
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
    newSize => {
        localStorage.setItem('ingredientPageSize', newSize.toString());
        loadIngredients();
    }
);

// hooks
onMounted(async () => {
    window.addEventListener('resize', handleResize);
    await storeRecipe.loadIngredientsCount();
});

onBeforeUnmount(async () => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
.section {
    min-height: $h-section;
    @include bg;
    @supports (
        background-image: url('@img/decor/section/recipe-details/bg.avif')
    ) {
        background-image: url('@img/decor/section/recipe-details/bg.avif');
    }
    background-image: url('@img/decor/section/recipe-details/bg.jpg');
    padding-block: $spacing-common;
}

.list-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: calc($spacing-fixed-header - 4.1rem);
    background-color: #ffffffda;
    margin-inline: auto;
    min-height: 42.5em;
    border-radius: $br-4;
    box-shadow: $dc-shadow-card;
    padding-block: $p-10;
    padding-inline: $p-10;
    color: #4a5f72;
}

@media (width <= $screen-sm) {
    .list-wrapper {
        padding-inline: $p-5;
    }
}
@media (width <= 40rem) {
    .list-wrapper {
        min-height: 39em;
    }
}
</style>
