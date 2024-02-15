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
import { useRoute } from 'vue-router';

const route = useRoute();
const storeRecipe = useStoreRecipe();

const page = reactive({
    number: computed(() => parseInt(route.query.page) || 1),
    size: parseInt(localStorage.getItem('pageSize')) || 32,
});

const handleResize = () => {
    switch (true) {
        case window.innerWidth <= 1535 && window.innerWidth > 1280:
            page.size = 28;
            break;
        case window.innerWidth <= 1280 && window.innerWidth > 640:
            page.size = 16;
            break;
        case window.innerWidth <= 640:
            page.size = 8;
            break;
        default:
            page.size = 32;
            break;
    }

    totalPages.value = Math.ceil(storeRecipe.ingredientCount / page.size);

    if (page.number <= 0) {
        page.number = 1;
    } else if (page.number > totalPages.value) {
        page.number = totalPages.value;
    }
};

const totalPages = computed(() => {
    return Math.ceil(storeRecipe.ingredientCount / page.size);
});

const loadIngredients = async () =>
    await storeRecipe.loadPaginatedIngredients(page.number, page.size);

// watchers
watch(() => route.query.page, loadIngredients, { immediate: true });

watch([() => page.size, () => page.number], ([newPageSize, newPageNumber]) => {
    localStorage.setItem('pageSize', newPageSize.toString());
    loadIngredients();

    totalPages.value = Math.ceil(storeRecipe.ingredientCount / page.size);

    // page number
    if (newPageNumber <= 0) {
        page.number = 1;
    } else if (page.number > totalPages.value) {
        page.number = totalPages.value;
    }
});

// hooks
onMounted(async () => {
    window.addEventListener('resize', handleResize);
    await storeRecipe.loadIngredientsCount();
});

onBeforeUnmount(async () => {
    window.removeEventListener('resize', handleResize);
    await storeRecipe.loadRecipesCount();
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
            pointer-events: none;
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
