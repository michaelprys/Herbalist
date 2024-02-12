<template>
    <div class="card">
        <div class="card__item">
            <ItemCardSkeleton
                v-if="!isLoaded"
                :isSkeletonActive="isSkeletonActive" />
            <img
                class="card__image"
                :src="getSrc('.jpg')"
                :alt="recipe.alt"
                width="15.625rem"
                loading="lazy" />
            <svg
                class="card__favorite-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path
                    d="M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z"></path>
            </svg>
            <div class="card__content">
                <h2 class="card__title">{{ recipe.title }}</h2>
                <p class="card__text">{{ recipe.short_description }}</p>
                <router-link
                    class="card__link"
                    :to="{
                        name: 'recipe-detail',
                        params: { recipe: recipe.slug },
                    }"
                    @click="handleClick"
                    >View more</router-link
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStoreRecipe } from '@/store/storeRecipe';
import ItemCardSkeleton from '@/component/ItemCardSkeleton.vue';

const storeRecipe = useStoreRecipe();

const isLoaded = ref(false);

const props = defineProps(['recipe', 'pending']);

const isSkeletonActive = ref(props.pending === true || !isLoaded.value);

const getSrc = ext => {
    return new URL(
        `../assets/images/content/recipe/${props.recipe.image}${ext}`,
        import.meta.url
    ).href;
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
    const img = new Image(getSrc('.jpg'));
    img.onload = onLoaded;
    img.src = getSrc('.jpg');
});
</script>

<style lang="scss">
.card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: $m-11;
    color: $c-grey-800;

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
        transition: 0.3s;
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
        transition: $tr-basic;
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
</style>
