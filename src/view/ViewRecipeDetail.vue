<template>
    <div class="recipe">
        <!-- <ItemCardSkeleton v-if="storeRecipe.pending || !storeRecipe.isLoaded" /> -->
        <!-- <template v-else> -->
        <ItemRecipeImage />
        <div class="recipe__details">
            <h1 class="recipe__title">Moon Tea</h1>
            <p class="recipe__description">
                <!-- {{ storeRecipe.data.full_description }} -->
                {{ recipe.full_description }}
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
                    1. Toss the Brussels sprouts, shallot, apple, pecan, and
                    pomegranate arils in a large bowl.
                </li>
            </ul>
        </div>
        <!-- </template> -->
    </div>
</template>

<script setup>
import ItemCardSkeleton from '@/component/ItemCardSkeleton.vue';
import ItemRecipeImage from '@/component/ItemRecipeImage.vue';
import { useStoreRecipe } from '@/store/storeRecipe';

const storeRecipe = useStoreRecipe();
</script>

<style lang="scss">
.recipe {
    max-width: 57.5rem;
    margin-inline: $auto;
    margin-top: $m-24;
    padding-bottom: $p-8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $c-olive;
    border-radius: $br-6;
    &__details {
        padding-inline: $p-12;
        padding-top: $p-8;
    }
    &__img {
        width: $w-full;
        height: $h-64;
        object-fit: cover;
        border-top-left-radius: $br-6;
        border-top-right-radius: $br-6;
    }
    &__title {
        font-size: $fs-lg;
    }
    &__description {
        margin-top: $m-8;
        font-size: $fs-h5;
        font-style: italic;
        font-family: '';
    }
    &__subtitle {
        font-size: $fs-h3;
        margin-top: $m-8;
    }
    &__ingredients-wrapper {
        position: relative;
    }
    &__ingredients {
        padding-left: $p-5;
        margin-top: $m-5;
        font-size: $fs-h5;
        font-family: '';
    }
    &__ingredients li {
        position: relative;
        margin-top: $m-4;
        display: flex;
        align-items: center;
        &::before {
            content: '';
            width: $w-3;
            min-height: $h-3;
            border-radius: $br-10;
            background: $c-grey-50;
            position: absolute;
            left: -1.25rem;
        }
    }
    &__instructions {
        margin-top: $m-5;
        font-size: $fs-h5;
        font-family: '';
    }
    &__instruction {
        margin-top: $m-4;
    }
}
</style>
