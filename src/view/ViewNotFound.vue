<template>
    <div class="section section--not-found">
        <div class="container">
            <div class="not-found">
                <div class="not-found__content">
                    <div class="not-found__img"></div>
                    <router-link
                        class="not-found__redirect-link"
                        :to="{ name: 'recipes' }"
                        >Go To Recipes</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.section--not-found {
    min-height: 100vh;
    @include bg;
    background-image: url('@/assets/images/decor/section/intro/bg.jpg');
    padding-top: calc($spacing-fixed-header + $p-12);
}

.not-found {
    background-color: rgba($c-olive, 80%);
    border-radius: $br-10;
    width: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
    &__content {
        padding: $p-10;
    }
    &__redirect-link {
        @include button-style($c-citrus);
        width: 50%;
        margin-inline: auto;
        margin-top: $m-5;
    }
    &__img {
        @include bg;
        background-image: url('@/assets/images/decor/section/not-found/not-found.png');
        width: 500px;
        height: 500px;
        margin-inline: auto;
    }
}
</style>
