<template>
    <div class="section section--ingredients">
        <div class="container">
            <div class="list-wrapper">
                <RouterView :totalPages="totalPages" :page="page" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, reactive, watch, onBeforeUnmount } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';
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

<style lang="scss">
.section--ingredients {
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
    display: flex;
    flex-direction: column;
    margin-top: calc($spacing-fixed-header - $m-12);
    background-color: #ffffffda;
    margin-inline: auto;
    min-height: 41em;
    border-radius: $br-4;
    box-shadow: $dc-shadow-card;
    padding: $p-10;
    color: #4a5f72;
}

.ingredient-list,
.recipes-list {
    &__title {
        text-align: center;
        font-size: $fs-h1;
    }
    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        row-gap: $g-4;
        column-gap: $g-6;
        gap: $g-4;
        margin-top: $m-10;
    }
    &__item {
        transition: $tr-smooth;
        border-radius: $br-4;
        background-color: #4a5f7212;
        &:hover {
            background-color: #4a5f7230;
        }
    }
    &__link {
        color: #4a5f72;
        padding-inline: $p-3;
        padding-block: $p-2;
    }
    &__icon {
        fill: #4a5f72c6;
    }
    &__wrapper {
        display: flex;
        align-items: center;
        gap: $g-3;
    }
    &__pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
        padding-top: $m-10; // $m rem, instead of $p em
    }
    &__pagination-item {
        font-size: $fs-h5;
    }
    &__btn-icon {
        fill: #4a5f72ad;
        transition: $tr-smooth;
        &:hover {
            fill: #4a5f72;
        }
    }
    &__btn-left,
    &__btn-right,
    &__btn-icon {
        &.inactive {
            fill: rgba(173, 173, 173, 0.746);
            cursor: not-allowed;
        }
    }
}

@media (width <= 1280px) {
    .ingredient-list {
        &__list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media (width <= 760px) {
    .ingredient-list {
        &__list {
            grid-template-columns: repeat(2, 1fr);
        }
        &__item {
            font-size: 17px;
        }
    }
}
@media (width <= 640px) {
    .ingredient-list {
        &__list {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .list-wrapper {
        min-height: 39em;
    }
}
</style>
