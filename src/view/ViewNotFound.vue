<template>
    <div class="section section--not-found">
        <div class="container">
            <div class="not-found">
                <div class="not-found__content">
                    <div class="not-found__img"></div>
                    <span class="not-found__text"
                        >Are you looking for recipes?</span
                    >
                </div>
                <router-link
                    class="not-found__redirect-link"
                    :to="{ name: 'recipes' }"
                    >Go To Recipes</router-link
                >
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.section--not-found {
    min-height: 100vh;
    @include bg;
    background-image: url('@/assets/images/decor/section/intro/bg.jpg');
    padding-top: $spacing-fixed-header;
    display: flex;
    align-items: center;
    justify-content: center;
}

.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff9d;
    margin-inline: auto;
    width: 35.125rem;
    min-height: 30rem;
    border-radius: $br-6;
    box-shadow: $dc-shadow-card;
    color: #4a5f72a1;
    padding: $p-10;
    &__content {
        width: 100%;
        margin-top: $m-12;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: $g-10;
    }
    &__img {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('@img/decor/section/not-found/not-found.png');
        width: 100%;
        height: 150px;
        opacity: 0.8;
    }
    &__text {
        font-size: $fs-h4;
        font-weight: bold;
        color: #4a5f72c7;
        text-align: center;
    }
    &__redirect-link {
        @include button-style($c-citrus);
        background-color: #4a5f72ab;
        margin-inline: auto;
        color: #ffffff;
        transition: $tr-button;
        margin-top: auto;
        width: 40%;
        &:hover {
            color: #4a5f72eb;
        }
    }
}
</style>
