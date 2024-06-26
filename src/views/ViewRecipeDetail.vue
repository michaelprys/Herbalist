<template>
    <section class="section" v-if="storeRecipe.selectedRecipe">
        <div class="container">
            <div class="recipe">
                <div class="recipe__bookmark"></div>
                <!-- <ItemCardSkeleton v-if="storeRecipe.pending || !storeRecipe.isLoaded" /> -->
                <!-- <template v-else> -->
                <!-- <ItemRecipeImage :recipe="recipe" /> -->

                <!-- TODO: img needs to be replaced with ItemRecipeImage component -->

                <div class="recipe__content">
                    <div class="recipe__img-wrapper">
                        <!-- TODO: add picture tag -->
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
                            <div class="recipe__route">
                                <span>»</span>
                                <router-link
                                    :to="{ name: 'home' }"
                                    class="recipe__route-link"
                                    >Home</router-link
                                >
                                <span>»</span>
                                <a
                                    class="recipe__route-link"
                                    @click="$router.back()"
                                    >Back</a
                                >
                            </div>
                            <h1 class="recipe__title">
                                {{ storeRecipe.selectedRecipe.title }}
                            </h1>
                            <div class="recipe__preparation">
                                <IconPreparation />
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
                                <ol class="recipe__ingredients">
                                    <li
                                        v-for="ingredient in storeRecipe.ingredientsOfRecipe"
                                        :key="ingredient.ingredient_id">
                                        {{ ingredient.name }}
                                    </li>
                                </ol>
                            </div>
                            <h2 class="recipe__subtitle">Method</h2>
                            <ol class="recipe__instructions">
                                <li
                                    class="recipe__instruction"
                                    v-for="(
                                        step, i
                                    ) in storeRecipe.selectedRecipe.method.split(
                                        '\n'
                                    )"
                                    :key="i">
                                    {{ step }}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useStoreRecipe } from '@/stores/storeRecipe';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import IconPreparation from '@/components/icons/IconPreparation.vue';

const storeRecipe = useStoreRecipe();
const route = useRoute();

const getSrc = (ext: string) => {
    if (storeRecipe.selectedRecipe !== null) {
        return new URL(
            `../assets/images/recipe/${storeRecipe.selectedRecipe.image}${ext}`,
            import.meta.url
        ).href;
    } else {
        return '';
    }
};

onMounted(async () => {
    await storeRecipe.loadIngredientsOfRecipe(route.params.recipe as string);
});
</script>

<style scoped lang="scss">
.container {
    margin-top: 7rem;
}

.section {
    min-height: 100svh;
    @include bg;
    background-attachment: fixed;
    background-image: url('@img/section/recipe-details/bg.jpg');
}

.recipe {
    display: flex;
    justify-content: space-between;
    margin-inline: auto;
    max-width: 78rem;
    height: 45.3212rem;
    background-color: #ffffffda;
    color: #4a5f72;
    border-radius: $br-4;
    box-shadow: $dc-shadow-card;
    position: relative;
    &__route {
        display: flex;
        gap: $g-2;
        &-link {
            color: #339f4c;
            background: linear-gradient(#349632a7, #349632a7);
            background-repeat: no-repeat;
            background-position: bottom;
            transition: background-size $tr-smooth;
            background-size: 0 2px;
            transition: 0.3s linear;
            cursor: pointer;
            &:hover {
                background-size: 100% 2px;
            }
        }
    }
    &__bookmark {
        @include bg;
        background-image: url('@img/section/recipe-details/bookmark.png');
        width: 80px;
        height: 80px;
        position: absolute;
        top: -1.85%;
        right: 6%;
        z-index: 1;
    }
    &__content {
        display: flex;
        justify-content: space-between;
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
        inset: 2em 0 2em 0;
        padding-inline: $p-7;
        &::-webkit-scrollbar {
            background-color: #50677b34;
            width: 0.375rem;
            border-radius: $br-4;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #50677b61;
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
        position: relative;
        padding: $p-8;
        border-radius: $br-4;
        width: 50%;
        &::after {
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            top: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.12);
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
        }
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: $br-4;
    }
    &__title {
        font-size: $fs-h1;
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
            transform: translateY(-50%);
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

@media (width <= $screen-lg) {
    .recipe {
        flex-direction: column;
        &__icon-favorite {
            display: none;
        }
        &__img-wrapper {
            box-shadow: none;
            padding: $p-0;
            width: 100%;
            height: 18.75rem;
        }
        &__img {
            width: 100%;
        }
        &__content {
            flex-direction: column;
            min-height: 300px;
            padding: $p-0;
            border: none;
        }
        &__details {
            min-height: 20.625rem;
        }
        &__bookmark {
            display: none;
        }
    }
}
@media (width <= $screen-sm) {
    .recipe {
        &__route {
            font-size: $fs-base;
        }
        &__title {
            font-size: $fs-h3;
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
