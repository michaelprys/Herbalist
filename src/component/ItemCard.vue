<template>
    <div class="card">
        <div class="card__item">
            <!-- <ItemCardSkeleton v-if="pending || !isLoaded" />
            <template v-else> -->
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
                    <p class="card__text">{{ data.short_description }}</p>
                    <router-link
                        class="card__link"
                        :to="{ name: 'recipeDetail' }"
                        >View more</router-link
                    >
                </div>
            </picture>

            <!-- </template> -->
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ItemCardSkeleton from '@/component/ItemCardSkeleton.vue';

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
    align-items: center;
    margin-top: $m-11;
    color: $c-grey-800;

    &__item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: $br-6;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
        cursor: pointer;
        background-color: $c-white;
        transition: 0.3s;
        &:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.329);
        }
    }
    &__image {
        border-top-left-radius: $br-6;
        border-top-right-radius: $br-6;
        display: block;
        width: $w-full;
        height: $h-60;
        object-fit: cover;
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
