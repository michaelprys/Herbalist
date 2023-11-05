<template>
    <div class="recipe">
        <img
            class="recipe__img"
            src="../../src/assets/image/recipe/recipe-1.jpg"
            alt="" />
        <div class="recipe__details">
            <h1 class="recipe__title">Moon Tea</h1>
            <p class="recipe__description">
                Rich in protein with a deeply savory aroma and flavor, bone
                broth is delicious to sip on its own as a restorative tonic. You
                can also use it as a foundation for soups and stews. This bone
                broth recipe is easy to make and straightforward.
            </p>
            <h2 class="recipe__subtitle">Ingredients</h2>
            <div class="recipe__ingredients-wrapper">
                <ul class="recipe__ingredients">
                    <li>3 pounds chicken bones</li>
                    <li>1 yellow onion</li>
                    <li>1 bulb garlic</li>
                    <li>2 tablespoons extra virgin olive oil</li>
                    <li>1 cup white wine</li>
                    <li>12 cups water</li>
                </ul>
            </div>
            <h2 class="recipe__subtitle">Method</h2>
            <ul class="recipe__instructions">
                <li class="recipe__instruction">
                    1. Toss the Brussels sprouts, shallot, apple, pecan, and
                    pomegranate arils in a large bowl.
                </li>
                <li class="recipe__instruction">
                    2. In a small jar or glass measuring cup, whisk the cider
                    vinegar, olive oil, mustard, honey, celery seeds, and salt
                    together until emulsified and uniformly combined.
                </li>
                <li class="recipe__instruction">
                    3. Pour the vinaigrette over the slaw, toss until
                    well-coated, and allow it to sit for about 5 minutes before
                    serving so that the flavors come together and the sprouts
                    begin to soften. Store any leftovers in the fridge for up to
                    1 day.
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss">
.recipe {
    max-width: 62.5rem;
    margin-inline: $auto;
    margin-top: $m-24;
    padding-bottom: $p-7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $c-olive;
    border-radius: $br-6;
    &__details {
        padding-inline: $p-20;
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
