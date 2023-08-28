<template>
  <div class="card">
    <div class="card__item">
      <img
        class="card__image" :src="data.image" :alt="data.alt" width="250px"
      />
      <div class="card__content">
        <h2 class="card__title">{{ data.title }}</h2>
        <p class="card__text">{{ data.text }}</p>
        <button class="card__button">View more</button>
      </div>
    </div>
  </div>
</template>

<!-- script -->

<script setup>
defineProps(["data"]);
</script>

<!-- style -->

<style lang="scss">
.card {
  display: flex;
  justify-content: center;
  margin-top: 2.8125rem;
  align-items: center;

  &__item {
    color: #000;
    max-width: 361px;
    border-radius: 0.3125rem;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: $white;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.329);
    }
  }
  &__image {
    display: block;
    min-width: 100%;
    height: 15rem;
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
    font-size: 1.25rem;
    font-weight: 800;
    transition: 0.3s;

  }
  &__text {
    padding-top: 12px;
    padding-bottom: 20px;
  }
  &__button {
    padding: 0.625rem;
    border-radius: 0.3125rem;
    transition: 0.3s;
    background-color: #afafaf;
    &:hover {
      background-color: $pink;
    }
  }
}
</style>
