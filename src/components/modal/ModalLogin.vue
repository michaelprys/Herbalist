<template>
    <div class="modal-login">
        <ItemDarkOverlay
            :class="{ active: modalVisible }"
            :style="{
                zIndex: 100,
                transition: 'opacity 0.5s, visibility 0.5s',
            }"
            @click="closeModal" />
        <Transition name="pop">
            <div class="login" v-if="modalVisible">
                <form class="login__form" action="">
                    <button
                        class="login__close-btn"
                        type="button"
                        @click="closeModal">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2.3rem"
                            height="2.3rem"
                            viewBox="0 0 24 24">
                            <path
                                d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                        </svg>
                    </button>
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

                        <router-link
                            class="login__forgot"
                            :to="{ name: 'home' }"
                            >Forgot password?</router-link
                        >
                    </div>

                    <button class="login__button" type="submit">Login</button>

                    <div class="login__register">
                        <span>Don't have an account?</span>
                        <router-link
                            class="login__register-link"
                            :to="{ name: 'home' }"
                            >Register</router-link
                        >
                    </div>
                </form>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import ItemDarkOverlay from '@/components/common/ItemDarkOverlay.vue';
import { useModal } from '@/use/useModal';

const { modalVisible, closeModal } = useModal();
</script>

<style scoped lang="scss">
.login {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
    z-index: 110;
    border-radius: $br-10;
    color: $c-white;
    border: none;
    background-color: rgba($c-olive, 0.99);
    &__close-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        background: none;
        width: 2.3rem;
        & svg {
            fill: $c-grey-50;
            transition: fill $tr-smooth;
            &:hover {
                fill: $c-white;
            }
        }
    }
    &__form {
        width: $w-96;
        padding: $p-10;
        margin-inline: auto;
        border-radius: $br-10;
        border: $bw-2 solid rgba($c-grey-300, 0.3);
        box-shadow: $dc-shadow-light;
        transition: transform $tr-basic;
    }
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
        outline: none;
        background-color: transparent;
        transition: color $tr-fast;
        font-size: $fs-medium;
        color: $c-white;
        &::placeholder {
            color: $c-grey-300;
        }
        &:focus {
            border: $bw-px solid $c-grey-50;
            box-shadow: 0px 0px 3px $c-white;
        }
    }
    &__input-icon {
        fill: $c-white;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
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
        width: $w-full;
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
        user-select: none;
        & input[type='checkbox'] {
            appearance: none;
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
                top: 50%;
                left: 50%;
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
