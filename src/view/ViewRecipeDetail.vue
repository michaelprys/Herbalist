<template>
    <div
        class="section section--recipe-details"
        v-if="storeRecipe.selectedRecipe">
        <div class="container">
            <div class="recipe">
                <div class="recipe__bookmark-icon"></div>
                <!-- <ItemCardSkeleton v-if="storeRecipe.pending || !storeRecipe.isLoaded" /> -->
                <!-- <template v-else> -->
                <!-- <ItemRecipeImage :recipe="recipe" /> -->

                <!-- TODO: img needs to be replaced with ItemRecipeImage component -->

                <div class="recipe__content">
                    <div class="recipe__img-wrapper">
                        <img
                            class="recipe__img"
                            :src="getSrc('.jpg')"
                            :alt="storeRecipe.selectedRecipe.alt" />

                        <div class="card__content">
                            <h2 class="card__title"></h2>
                            <p class="card__text"></p>
                        </div>
                    </div>
                    <div class="recipe__details-wrapper">
                        <div class="recipe__details">
                            <h1 class="recipe__title">
                                {{ storeRecipe.selectedRecipe.title }}
                            </h1>
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
                                <span
                                    >{{
                                        storeRecipe.selectedRecipe.prep_time
                                    }}
                                    min</span
                                >
                            </div>
                            <p class="recipe__description">
                                {{
                                    storeRecipe.selectedRecipe.full_description
                                }}
                            </p>
                            <h2 class="recipe__subtitle">Ingredients</h2>
                            <div class="recipe__ingredients-wrapper">
                                <ol
                                    class="recipe__ingredients"
                                    v-for="ingredient in storeRecipe.selectedRecipe.ingredient.split(
                                        '\n'
                                    )"
                                    :key="ingredient.recipe_id">
                                    <li>{{ ingredient }}</li>
                                </ol>
                            </div>
                            <h2 class="recipe__subtitle">Method</h2>
                            <ol class="recipe__instructions">
                                <li
                                    class="recipe__instruction"
                                    v-for="step in storeRecipe.selectedRecipe.method.split(
                                        '\n'
                                    )"
                                    :key="step.recipe_id">
                                    {{ step }}
                                </li>
                            </ol>
                        </div>
                    </div>

                    <!-- </template> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStoreRecipe } from '@/store/storeRecipe';
const storeRecipe = useStoreRecipe();

const getSrc = ext => {
    return new URL(
        `../assets/images/content/recipe/${storeRecipe.selectedRecipe.image}${ext}`,
        import.meta.url
    ).href;
};
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
    max-width: 78rem;
    height: 43.8rem;
    background-color: #ffffffda;
    color: #4a5f72;
    border-radius: $br-4;
    box-shadow: $dc-shadow-card;
    position: relative;

    &__bookmark-icon {
        @include bg;
        background-image: url('@img/decor/section/recipe-details/bookmark.png');
        width: 80px;
        height: 80px;
        position: absolute;
        top: -1.85%;
        right: 6%;
        z-index: 5;
    }
    &__content {
        display: flex;
        justify-content: space-between;
        box-shadow: $dc-shadow-card;
        // border: 0.625rem solid #e7e7e754;
        width: 100%;
        margin-inline: auto;
    }
    &__details-wrapper {
        position: relative;
        width: 100%;
    }
    &__details {
        overflow-y: scroll;
        position: absolute;
        inset: 2em;
        padding-left: $p-5;
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
    }
    &__preparation {
        display: flex;
        align-items: center;
        gap: $g-3;
        margin-top: $m-3;
        & svg {
            fill: #50677bc8;
        }
    }
    &__img-wrapper {
        @include bg;
        box-shadow: $dc-shadow-card;
        padding: $p-8;
        border-radius: $br-4;
        width: 50%;
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: $br-4;
    }
    &__title {
        font-size: $fs-lg;
    }
    &__description {
        font-size: $fs-h5;
        font-style: italic;
        font-family: '';
        padding-top: $p-4;
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
            left: -1.5rem;
            top: 50%;
            transform: $translateY-half-neg;
        }
    }
    &__instructions {
        font-size: $fs-h5;
        font-family: '';
        padding-left: $p-4;
    }
    &__instruction {
        margin-top: $m-4;
        list-style: decimal;
        padding-left: $p-2;
    }
}

@media (width <= $screen-xl) {
    .recipe-container {
        max-width: $screen-md;
        margin-inline: auto;
    }
    .recipe {
        flex-direction: column;
        &__bookmark-icon {
            display: none;
        }
        &__img-wrapper {
            box-shadow: none;
            padding: 0;
            width: 100%;
            height: 18.75rem;
        }
        &__img {
            width: 100%;
        }

        &__content {
            flex-direction: column;
            min-height: 300px;
            padding: 0;
            border: none;
        }
        &__details {
            width: 100%;
            box-shadow: none;
            border: none;
            padding-inline: $p-9;
            padding-top: $p-5;
            padding-bottom: $p-9;
        }
    }
}
@media (width <= $screen-lg) {
    .recipe-container {
        padding-inline: $p-6;
    }
}
@media (width <= $screen-sm) {
    .recipe {
        &__title {
            font-size: $fs-h2;
        }
        &__subtitle {
            font-size: $fs-h4;
        }
        &__ingredients,
        &__instructions {
            font-size: $fs-h6;
        }
    }
}
</style>
