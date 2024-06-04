<template>
    <div class="card">
        <div class="card__item">
            <ItemCardSkeleton
                v-if="!isLoaded"
                :isSkeletonActive="isSkeletonActive" />
            <picture>
                <source :srcset="getSrcSet('.avif')" type="image/avif" />
                <img
                    class="card__image"
                    :src="getSrc('.jpg')"
                    :alt="recipe.alt"
                    width="15.625rem"
                    loading="lazy" />
            </picture>
            <IconFavorite class="card__favorite-icon" />
            <div class="card__content">
                <h2 class="card__title">{{ recipe.title }}</h2>
                <p class="card__text">{{ recipe.short_description }}</p>
                <router-link
                    class="card__link"
                    :to="{
                        name: 'recipe-detail',
                        params: { recipe: recipe.title }, // TODO change title to slug
                    }"
                    @click="handleClick"
                    >See full</router-link
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStoreRecipe } from '@/stores/storeRecipe';
import IconFavorite from '@/components/icons/IconFavorite.vue';
import ItemCardSkeleton from '@/components/common/ItemCardSkeleton.vue';
import type { Recipe } from '@/types/dbTypes';

const storeRecipe = useStoreRecipe();

const isLoaded = ref(false);

const props = defineProps<{
    recipe: Recipe;
    pending: boolean;
}>();

const isSkeletonActive = ref(props.pending === true || !isLoaded.value);

const getSrc = (ext: string) => {
    return new URL(
        `../../assets/images/recipe/${props.recipe.image}${ext}`,
        import.meta.url
    ).href;
};

const getSrcSet = (ext: string) => {
    return `${getSrc(ext).replace('.jpg', ext)}`;
};

const onLoaded = () => {
    isLoaded.value = true;
    setTimeout(() => {
        isLoaded.value = true;
        isSkeletonActive.value = false;
    }, 100);
};

const handleClick = () => {
    storeRecipe.selectRecipe(props.recipe);
};

onMounted(() => {
    const img = new Image();
    img.onload = onLoaded;
    img.src = getSrc('.jpg');
});
</script>

<style lang="scss">
.card {
    position: relative;
    display: flex;
    align-items: center;
    color: $c-grey-800;
    max-width: 380px;
    width: 100%;
    user-select: none;
    margin-inline: auto;
    &__favorite-icon {
        position: absolute;
        fill: #b53e38;
        width: 3rem;
        height: 3rem;
        top: -0.35rem;
        right: 0.5rem;
        transition: $tr-smooth;
        opacity: $op-0;
        pointer-events: none;
    }
    &__item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: $br-6;
        box-shadow: $dc-shadow-card;
        cursor: pointer;
        background-color: $c-white;
        transition: box-shadow 0.3s;
        &:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.329);
        }
    }
    &__image {
        position: relative;
        border-top-left-radius: $br-6;
        border-top-right-radius: $br-6;
        display: block;
        width: $w-full;
        height: $h-60;
        object-fit: cover;
        &:hover {
            + .card__favorite-icon {
                opacity: $op-100;
            }
        }
    }
    &__content {
        padding: $p-8;
    }
    &__title {
        font-size: $fs-h5;
        font-weight: $fw-bold;
        color: $c-grey-700;
    }
    &__text {
        font-size: $fs-medium;
        padding-top: $p-3;
        min-height: $h-28;
    }
    &__link {
        @include button-style($c-pink);
    }
}

@media (width <= 54rem) {
    .card {
        max-width: 22.5rem;
    }
}
@media (width >= 20rem) and (width <= 26.25rem) {
    .card {
        max-width: 18.75rem;
    }
}
</style>
