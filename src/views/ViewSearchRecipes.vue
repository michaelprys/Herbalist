<template>
    <div class="search-wrapper">
        <label class="search">
            <input
                type="text"
                class="search__input"
                placeholder="Start typing a recipe name" />
            <button class="search__button"></button>
        </label>
    </div>
</template>

<script setup></script>

<style lang="scss">
.search-wrapper {
    margin-top: $m-content;
}
.search {
    position: relative;
    &__input {
        @include bar;
        font-weight: 800;
        &::placeholder {
            font-size: 1.5rem;
            font-weight: normal;
            color: rgba(255, 255, 255, 0.462);
        }
        &:focus {
            background-color: rgba(0, 0, 0, 0.911);
        }
    }
    &__button {
        background: none;
    }
}
</style>
