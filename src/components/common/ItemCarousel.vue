<template>
    <div class="container">
        <div class="wrapper">
            <vue-horizontal
                class="carousel horizontal"
                ref="horizontal"
                responsive
                :button="width <= 864 ? false : true"
                @scroll-debounce="onScroll">
                <section
                    class="carousel__slide"
                    v-for="recipe in storeRecipe.popularRecipes"
                    :key="recipe.recipe_id">
                    <ItemCard :recipe="recipe" :pending="storeRecipe.pending" />
                </section>
            </vue-horizontal>
            <div class="carousel__buttons" v-if="width <= 864">
                <button
                    class="carousel__btn-prev"
                    @click="prev"
                    :class="{ inactive: !hasPrev }">
                    <IconPrev />
                </button>
                <button
                    class="carousel__btn-next"
                    @click="next"
                    :class="{ inactive: !hasNext }">
                    <IconNext />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStoreRecipe } from '@/stores/storeRecipe';
import ItemCard from '@/components/common/ItemCard.vue';
import VueHorizontal from 'vue-horizontal';
import IconPrev from '@/components/icons/IconPrev.vue';
import IconNext from '@/components/icons/IconNext.vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const storeRecipe = useStoreRecipe();

const horizontal = ref(null);
const hasPrev = ref(false);
const hasNext = ref(true);

const prev = () => {
    if (horizontal.value !== null) {
        horizontal.value.prev({ stopPropagation: () => {} });
    }
};
const next = () => {
    if (horizontal.value !== null) {
        horizontal.value.next({ stopPropagation: () => {} });
    }
};

const onScroll = ({
    hasPrev: prev,
    hasNext: next,
}: {
    hasPrev: boolean;
    hasNext: boolean;
}) => {
    hasPrev.value = prev;
    hasNext.value = next;
};

onMounted(async () => {
    await storeRecipe.loadPopularRecipes();
});
</script>

<style scoped lang="scss">
:deep(.v-hl-svg) {
    border: 1px solid #bebebe;
}
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.carousel {
    max-width: 75.25rem;
    margin-bottom: $m-2;
    &__slide {
        margin-right: 2rem;
        &:last-child {
            margin-right: $m-0;
        }
    }
    &__buttons {
        display: flex;
        gap: $g-6;
    }
    &__btn-prev,
    &__btn-next {
        padding: $p-2_5;
        border-radius: $br-round;
        background-color: white;
        font-weight: 700;
        margin-top: $m-5;
        fill: $c-grey-700;
        &.inactive {
            @include btn-inactive;
        }
    }
}

@media (width <= $screen-xxl) {
    .carousel {
        max-width: 49.5rem;
    }
}
@media (width <= 54rem) {
    .carousel {
        max-width: 360px;
    }
}
@media (width >= 20rem) and (width <= 26.25rem) {
    .carousel {
        max-width: 18.75rem;
    }
}
</style>
