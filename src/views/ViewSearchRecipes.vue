<template>
  <div class="container">
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
.search {
  position: relative;
  &__input {
    display: block;
    min-width: 50rem;
    margin-top: 80px;
    margin-inline: auto;
    padding-block: 1rem;
    padding-inline: 20px;
    border: 2px solid rgba(255, 255, 255, 0.651);
    border-radius: $br-rounded;
    background-color: rgba(0, 0, 0, 0.77);
    font-size: 1.5rem;
    color: $c-white;
    font-weight: 800;
    outline: none;
    transition: $tr-basic;
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

@media (max-width: 640px) {
  .search {
    &__input {
      min-width: 25rem;
    }
  }
}

@media (min-width: 640px) {
  .search {
    &__input {
      min-width: 30rem;
    }
  }
}

@media (min-width: 800px) {
  .search {
    &__input {
      min-width: 40rem;
    }
  }
}

@media (min-width: 1040px) {
  .search {
    &__input {
      min-width: 50rem;
    }
  }
}
</style>
