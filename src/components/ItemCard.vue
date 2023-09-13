<template>
  <div class="card">
    <div class="card__item">
      <img
        class="card__image"
        :src="data.image"
        :alt="data.alt"
        width="15.625rem" />
      <div class="card__content">
        <h2 class="card__title">{{ data.title }}</h2>
        <p class="card__text">{{ data.text }}</p>
        <router-link class="card__link" :to="{ name: 'Home' }"
          >View more</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["data"]);
</script>

<style lang="scss">
.card {
  display: flex;
  justify-content: center;
  margin-top: 45px;
  align-items: center;
  &__item {
    color: $c-black;
    border-radius: $br-rounded;
    max-width: 22.5625rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: $c-white;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.329);
    }
  }
  &__image {
    border-top-left-radius: $br-rounded;
    border-top-right-radius: $br-rounded;
    display: block;
    min-width: 100%;
    height: 240px;
    object-fit: cover;
  }
  &__content {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    & :last-child {
      align-items: center;
    }
  }
  &__title {
    font-size: 20px;
    font-weight: $fw-bold;
    transition: $tr-basic;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__text {
    font-size: $fs-regular;
    padding-top: 0.75rem;
    padding-bottom: 1.25rem;
  }
  &__link {
    @include button-style($c-pink);
  }
}
</style>
