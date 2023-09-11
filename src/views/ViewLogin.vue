<template>
  <div class="container">
    <form action="" class="login" :class="{ appear: showLogin }">
      <h1 class="login__title">Login</h1>

      <div>
        <input class="login__input" type="text" placeholder="Username" />
      </div>

      <div>
        <input class="login__input" type="text" placeholder="Password" />
      </div>

      <div class="login__options">
        <div class="login__checkbox">
          <input type="checkbox" />
          <label>
            <svg
              class="login__unchecked"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path
                d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"></path>
            </svg>
            <svg
              class="login__checked"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path
                d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"></path>
              <path
                d="M10.996 12.556 9.7 11.285l-1.4 1.43 2.704 2.647 4.699-4.651-1.406-1.422z"></path>
            </svg>
            Remember Me</label
          >
        </div>
        <router-link class="login__forgot" :to="{ name: 'Home' }"
          >Forgot Password?</router-link
        >
      </div>

      <button class="login__button" type="submit">Login</button>

      <div class="login__register">
        <span>Don't have an account?</span>
        <router-link class="login__register-link" :to="{ name: 'Home' }"
          >Register</router-link
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showLogin = ref(false);

onMounted(() => {
  setTimeout(() => {
    showLogin.value = true;
  }, 100);
});
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-inline: auto;
  margin-top: 7rem;
  padding: 40px;
  text-align: center;
  background-color: rgba(76, 76, 76, 0.86);
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  background-color: transparent;
  border: 2px solid $c-grey-transparent;
  box-shadow: $fx-shadow-light;
  transition: transform $tr-basic;
  transform: scale(0);
  &.appear {
    transform: scale(1);
  }
  &__title {
    font-weight: 800;
    font-size: 32px;
  }
  &__input {
    width: 100%;
    margin-top: 30px;
    padding: 10px;
    padding-left: 20px;
    border-radius: $br-full;
    border: 1px solid $c-grey-transparent;
    outline: none;
    background-color: transparent;
    color: $c-grey-lightest;
    transition: $tr-fast;
    &::placeholder {
      color: #ffffff65;
    }
    &:focus {
      border: 1px solid #ffffffb3;
      box-shadow: 0px 0px 3px $c-white;
    }
  }
  &__options {
    margin-block: 15px;
    display: flex;
    justify-content: space-between;
    font-size: $fs-regular;
  }
  &__forgot {
    @include underline;
  }
  &__button {
    @include button-style($c-yellow);
    margin-block: 5px;
    font-weight: $fw-bold;
    border-radius: $br-full;
    background-color: $c-white;
  }
  &__register {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-block: 15px;
    font-size: $fs-regular;
  }
  &__register-link {
    @include underline;
  }

  &__checked {
    display: none;
  }

  &__checkbox {
    display: flex;
    & input {
      appearance: none;
    }
    & input:checked + .login__unchecked {
      display: none;
    }
    & input:checked + .login__checked {
      display: flex;
    }
    & label {
      display: flex;
      gap: 5px;
      cursor: pointer;
      fill: $c-white;
    }
  }
}
</style>
