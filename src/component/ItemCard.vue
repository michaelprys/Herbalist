<template>
    <div class="card">
        <div class="card__item">
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
                    :to="{
                        name: 'recipeDetail',
                        params: { recipe: data.slug },
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

const storeRecipe = useStoreRecipe();

const isLoaded = ref(false);

const props = defineProps(['data', 'pending']);

const getSrc = ext => {
    return new URL(
        `../assets/images/content/recipe/${props.data.image}${ext}`,
        import.meta.url
    ).href;
};

onMounted(() => {
    const img = new Image(getSrc('.jpg'));
    img.onload = () => {
        isLoaded.value = true;
    };
    img.src = getSrc('.jpg');
});

const handleClick = () => {
    storeRecipe.selectRecipe(props.data);
};
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
        box-shadow: $dc-shadow-card;
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
