<template>
    <div class="login-wrapper">
        <form action="" class="login" :class="{ appear: showLogin }">
            <h1 class="login__title">Login</h1>

            <div class="login__input-wrapper">
                <input
                    class="login__input"
                    type="text"
                    placeholder="Username" />
                <svg
                    class="login__input-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                </svg>
            </div>

            <div class="login__input-wrapper">
                <input
                    class="login__input"
                    type="text"
                    placeholder="Password" />
                <svg
                    class="login__input-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
                </svg>
            </div>

            <div class="login__options">
                <label class="login__checkbox-container" for="checkbox">
                    <input type="checkbox" id="checkbox" /> Remember me
                </label>

                <router-link class="login__forgot" :to="{ name: 'home' }"
                    >Forgot password?</router-link
                >
            </div>

            <button class="login__button" type="submit">Login</button>

            <div class="login__register">
                <span>Don't have an account?</span>
                <router-link class="login__register-link" :to="{ name: 'home' }"
                    >Register</router-link
                >
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showLogin = ref(false);

onMounted(() => {
    setTimeout(() => {
        showLogin.value = true;
    }, 1);
});
</script>

<style lang="scss">
.login-wrapper {
    margin-top: $m-32;
    min-height: 100vh;
    padding-top: calc($spacing-fixed-header + $p-6);
}
.login {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: $w-96;
    padding: $p-10;
    margin-inline: $auto;
    border-radius: $br-10;
    border: $bw-2 solid rgba($c-grey-600, 0.5);
    box-shadow: $dc-shadow-light;
    transition: transform $tr-basic;
    background-color: rgba($c-olive, 0.99);

    &__title {
        font-weight: $fw-bold;
        font-size: $fs-h2;
        text-align: center;
    }
    &__input-wrapper {
        position: relative;
        margin-top: $m-8;
    }
    &__input {
        width: $w-full;
        padding: $p-3;
        padding-left: $p-5;
        border-radius: $br-full;
        border: $bw-px solid $c-grey-300;
        outline: $none;
        background-color: transparent;
        transition: $tr-fast;
        font-size: $fs-medium;
        color: $c-white;
        &::placeholder {
            color: $c-grey-50;
        }
        &:focus {
            border: $bw-px solid $c-grey-50;
            box-shadow: 0px 0px 3px $c-white;
        }
    }
    &__input-icon {
        fill: $c-white;
        position: absolute;
        transform: $translateY-half-neg;
        top: $top-half;
        right: 1rem;
    }
    &__options {
        margin-block: $m-4;
        display: flex;
        justify-content: space-between;
        font-size: $fs-medium;
    }
    &__forgot {
        @include underline;
    }
    &__button {
        @include button-style($c-citrus);
        margin-block: $m-2;
        border-radius: $br-full;
        background-color: $c-white;
    }
    &__register {
        display: flex;
        justify-content: center;
        gap: $g-2_5;
        margin-block: $m-4;
        font-size: $fs-medium;
    }
    &__register-link {
        @include underline;
    }

    &__checkbox-container {
        display: flex;
        align-items: center;
        gap: $g-2_5;
        cursor: pointer;
        user-select: $none;
        & input[type='checkbox'] {
            appearance: $none;
            width: $w-3_5;
            min-height: $h-3_5;
            background-color: $c-white;
            border-radius: $br-2;
            transition: 120ms transform ease-in-out;
            position: relative;
            cursor: pointer;

            &:hover {
                transform: scale(1.1);
            }

            &::before {
                content: '';
                position: absolute;
                opacity: $op-0;
                transform: translate(-50%, -50%);
                top: $top-half;
                left: $left-half;
                width: $w-2;
                min-height: $w-2;
                background-color: $c-grey-600;
                transition: 80ms transform ease-in-out;
            }

            &:checked::before {
                transform: translate(-50%, -50%);
                opacity: $op-100;
            }
        }
    }
}
</style>
