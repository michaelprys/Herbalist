<template>
    <div class="card">
        <div class="card__item">
            <ItemCardSkeleton v-if="pending || !isLoaded" />
            <template v-else>
                <picture>
                    <source :srcset="getSrcset('.avif')" type="image/avif" />
                    <source :srcset="getSrcset('.webp')" type="image/webp" />
                    <img
                        class="card__image"
                        :src="getSrc('.jpg')"
                        :alt="data.alt"
                        width="15.625rem"
                        loading="lazy" />
                    <div class="card__content">
                        <h2 class="card__title">{{ data.title }}</h2>
                        <p class="card__text">{{ data.text }}</p>
                        <router-link
                            class="card__link"
                            :to="{ name: 'recipeDetails' }"
                            >View more</router-link
                        >
                    </div>
                </picture>
            </template>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ItemCardSkeleton from '@/components/SkeletonLoaders/ItemCardSkeleton.vue';

const props = defineProps(['data', 'pending']);

const isLoaded = ref(false);

const getSrc = ext => {
    return new URL(
        `../assets/images/recipe/${props.data.image}${ext}`,
        import.meta.url
    ).href;
};

const getSrcset = ext => {
    return `${getSrc(ext).replace('.jpg', ext)}`;
};

onMounted(() => {
    const img = new Image(getSrc('.jpg'));
    img.onload = () => {
        isLoaded.value = true;
    };
    img.src = getSrc('.jpg');
});
</script>

<style lang="scss">
.card {
    display: flex;
    justify-content: center;
    margin-top: 45px;
    align-items: center;

    &__item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: $c-black;
        border-radius: $br-rounded;
        max-width: 22.5625rem;
        height: 30.25rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        cursor: pointer;
        background-color: $c-white;
        transition: 0.3s;
        &:hover {
            box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.329);
        }
    }
    &__image {
        border-top-left-radius: $br-rounded;
        border-top-right-radius: $br-rounded;
        display: block;
        min-width: 100%;
        height: 15rem;
        object-fit: cover;
    }
    &__content {
        padding: 2rem;
    }
    &__title {
        font-size: 20px;
        font-weight: $fw-bold;
        transition: $tr-basic;
    }
    &__text {
        font-size: $fs-regular;
        padding-top: 0.75rem;
        min-height: 106px;
    }
    &__link {
        @include button-style($c-pink);
    }
}
</style>
