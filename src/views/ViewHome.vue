<template>
  <section class="recipes">
    <h1 class="recipes__title">Recipes</h1>
    <div class="card">
      <div class="card__item">
        <img
          class="card__image"
          src="@/assets/images/card/card-1.jpg"
          width="250px"
          alt="Card"
        />
        <div class="card__content">
          <h2 class="card__title">Moon tea</h2>
          <p class="card__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            dolor nostrum iure similique eveniet libero quos reiciendis.
          </p>
          <button class="card__button">View more</button>
        </div>
      </div>
      <div class="card__item">
        <img
          class="card__image"
          src="@/assets/images/card/card-2.jpg"
          width="250px"
          alt="Card"
        />
        <div class="card__content">
          <h2 class="card__title">Rose tea</h2>
          <p class="card__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            dolor nostrum iure similique eveniet libero quos reiciendis.
          </p>
          <button class="card__button">View more</button>
        </div>
      </div>
      <div class="card__item">
        <img
          class="card__image"
          src="@/assets/images/card/card-3.jpg"
          width="250px"
          alt="Card"
        />
        <div class="card__content">
          <h2 class="card__title">Green witch</h2>
          <p class="card__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            dolor nostrum iure similique eveniet libero quos reiciendis.
          </p>
          <button class="card__button">View more</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.recipes {
  max-width: 71.6875rem;
  margin-inline: auto;
  &__title {
    margin-top: 3.125rem;
    font-size: 3rem;
    text-shadow: 8px 8px 18px black;
  }
}

.card {
  display: flex;
  justify-content: space-between;
  margin-top: 2.8125rem;
  gap: 1.25rem;
  color: #000;

  &__item {
    width: 361px;
    border-radius: 5px;
    overflow: hidden;
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
    font-size: 0.9375rem;
  }
  &__button {
    padding: 0.625rem;
    border-radius: 0.3125rem;
    background-color: #afafaf;
  }
}
</style>
