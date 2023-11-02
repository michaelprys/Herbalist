<template>
    <div class="recipe">
        <img
            class="recipe__img"
            src="../../src/assets/images/recipe/recipe-1.jpg"
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
    margin-inline: $mx-auto;
    margin-top: 90px;
    padding-bottom: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $c-olive;
    border-radius: $br-medium;
    &__details {
        padding-inline: 5rem;
        padding-top: 2rem;
    }
    &__img {
        width: $w-full;
        height: 250px;
        object-fit: cover;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    &__title {
        font-size: $fs-lg;
    }
    &__description {
        margin-top: 30px;
        font-size: $fs-h5;
        font-style: italic;
        font-family: '';
    }
    &__subtitle {
        font-size: $fs-h3;
        margin-top: 30px;
    }
    &__ingredients-wrapper {
        position: relative;
    }
    &__ingredients {
        padding-left: 20px;
        margin-top: 20px;
        font-size: $fs-h5;
        font-family: '';
    }
    &__ingredients li {
        position: relative;
        margin-top: 15px;
        display: flex;
        align-items: center;
        &::before {
            content: '';
            width: 0.7rem;
            height: 0.7rem;
            border-radius: $br-large;
            background: $c-grey-50;
            position: absolute;
            left: -20px;
        }
    }
    &__instructions {
        margin-top: 20px;
        font-size: $fs-h5;
        font-family: '';
    }
    &__instruction {
        margin-top: 15px;
    }
}
</style>
