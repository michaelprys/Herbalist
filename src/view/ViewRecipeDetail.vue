<template>
    <div class="section section--recipe-details">
        <div class="container">
            <div class="recipe">
                <!-- <ItemCardSkeleton v-if="storeRecipe.pending || !storeRecipe.isLoaded" /> -->
                <!-- <template v-else> -->
                <!-- <ItemRecipeImage :recipe="recipe" /> -->

                <!-- TODO: img needs to be replaced with ItemRecipeImage component -->
                <!-- <picture>
            <source :srcset="getSrcset('.avif')" type="images/avif" />
            <source :srcset="getSrcset('.webp')" type="images/webp" /> -->
                <!-- <img
            class="card__image"
            :src="getSrc('.jpg')"
            :alt="storeRecipe.data.alt"
            width="15.625rem"
            loading="lazy" /> -->
                <div class="recipe__content">
                    <img
                        class="recipe__img"
                        src="@img/content/recipe/recipe-1.jpg" />

                    <!-- <div class="card__content">
            <h2 class="card__title">{{ storeRecipe.data.title }}</h2>
            <p class="card__text">
                {{ storeRecipe.data.short_description }}
            </p>
        </div> -->
                    <!-- </picture> -->

                    <div class="recipe__details">
                        <h1 class="recipe__title">Moon Tea</h1>
                        <div class="recipe__preparation">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2rem"
                                height="2rem"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                                <path d="M13 7h-2v6h6v-2h-4z"></path>
                            </svg>
                            <span>5 min</span>
                        </div>
                        <p class="recipe__description">
                            <!-- {{ storeRecipe.data.full_description }} -->
                            <!-- {{ recipe.full_description }} -->
                        </p>
                        <h2 class="recipe__subtitle">Ingredients</h2>
                        <div class="recipe__ingredients-wrapper">
                            <ul class="recipe__ingredients">
                                <li>3 pounds chicken bones</li>
                            </ul>
                        </div>
                        <h2 class="recipe__subtitle">Method</h2>
                        <ul class="recipe__instructions">
                            <li class="recipe__instruction">
                                1. Toss the Brussels sprouts, shallot, apple,
                                pecan, and pomegranate arils in a large bowl.
                            </li>
                            <li class="recipe__instruction">
                                1. Toss the Brussels sprouts, shallot, apple,
                                pecan, and pomegranate arils in a large bowl.
                            </li>
                            <li class="recipe__instruction">
                                1. Toss the Brussels sprouts, shallot, apple,
                                pecan, and pomegranate arils in a large bowl.
                            </li>
                            <li class="recipe__instruction">
                                1. Toss the Brussels sprouts, shallot, apple,
                                pecan, and pomegranate arils in a large bowl.
                            </li>
                            <li class="recipe__instruction">
                                1. Toss the Brussels sprouts, shallot, apple,
                                pecan, and pomegranate arils in a large bowl.
                            </li>
                        </ul>
                    </div>
                    <!-- </template> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ItemCardSkeleton from '@/component/ItemCardSkeleton.vue';
import ItemRecipeImage from '@/component/ItemRecipeImage.vue';
import { useStoreRecipe } from '@/store/storeRecipe';

const storeRecipe = useStoreRecipe();

const isLoaded = ref(false);

const getSrc = ext => {
    return new URL(
        `../assets/images/recipe/${storeRecipe.data.image}${ext}`,
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
.section--recipe-details {
    min-height: 100vh;
    @include bg;
    background-image: url('@img/decor/section/recipe-details/bg.jpg');
}

.recipe {
    display: flex;
    justify-content: space-between;
    margin-top: calc($spacing-fixed-header - $m-6);
    margin-bottom: $m-40;
    margin-inline: auto;
    max-width: 70rem;
    height: 42rem;
    background-color: #ffffffda;
    color: #4a5f72;
    border-radius: $br-4;
    &__content {
        display: flex;
        justify-content: space-between;
        padding: $p-9;
        gap: $g-6;
    }
    &__details {
        position: relative;
        padding: $p-4;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            background-color: $c-grey-50;
            width: 0.375rem;
            border-radius: $br-4;
        }
        &::-webkit-scrollbar-thumb {
            background-color: $c-grey-200;
            border-radius: $br-4;
            transition: $tr-smooth;
        }
        // &::before {
        //     content: '';
        //     position: absolute;
        //     bottom: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 20px;
        //     background: linear-gradient(
        //         to bottom,
        //         rgba(255, 255, 255, 0),
        //         #ffffffda
        //     );
        //     pointer-events: none;
        //     z-index: 1;
        // }
    }
    &__preparation {
        display: flex;
        align-items: center;
        gap: $g-3;
        & svg {
            fill: #50677bc8;
        }
    }
    &__img {
        width: 30rem;
        height: 25rem;
        object-fit: cover;
        border-radius: $br-4;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    &__title {
        font-size: $fs-lg;
    }
    &__description {
        font-size: $fs-h5;
        font-style: italic;
        font-family: '';
    }
    &__subtitle {
        font-size: $fs-h3;
        margin-top: $m-5;
    }
    &__ingredients-wrapper {
        position: relative;
    }
    &__ingredients {
        padding-left: $p-5;
        font-size: $fs-h5;
        font-family: '';
    }
    &__ingredients li {
        position: relative;
        margin-top: $m-4;
        &::before {
            content: '';
            width: $w-2;
            height: $h-2;
            border-radius: $br-10;
            background-color: #50677bc8;
            position: absolute;
            left: -1.25rem;
            top: 50%;
            transform: $translateY-half-neg;
        }
    }
    &__instructions {
        font-size: $fs-h5;
        font-family: '';
    }
    &__instruction {
        margin-top: $m-4;
    }
}
</style>
