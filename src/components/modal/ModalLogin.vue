<template>
    <div class="modal-wrapper" @keydown.esc="closeModal">
        <ItemDarkOverlay
            :class="{ active: modalState }"
            :style="{
                zIndex: 100,
                transition: 'opacity 0.5s, visibility 0.5s',
            }" />
        <Transition name="pop">
            <div class="modal" v-if="modalState" ref="clickOutsideRef">
                <div ref="focusRef">
                    <form class="modal__form" action="">
                        <button
                            class="modal__close-btn"
                            type="button"
                            @click="closeModal">
                            <IconClose />
                        </button>
                        <h1 class="modal__title">Login</h1>

                        <div class="modal__input-wrapper">
                            <input
                                class="modal__input"
                                type="text"
                                placeholder="Username" />
                            <IconUsername class="modal__input-icon" />
                        </div>

                        <div class="modal__input-wrapper">
                            <input
                                class="modal__input"
                                type="text"
                                placeholder="Password" />
                            <IconPassword class="modal__input-icon" />
                        </div>

                        <div class="modal__options">
                            <label
                                class="modal__checkbox-container"
                                for="checkbox">
                                <input type="checkbox" id="checkbox" /> Remember
                                me
                            </label>

                            <router-link
                                class="modal__forgot"
                                :to="{ name: 'home' }"
                                >Forgot password?</router-link
                            >
                        </div>

                        <button class="modal__button" type="submit">
                            Sign in
                        </button>

                        <div class="modal__register">
                            <span>Don't have an account?</span>
                            <router-link
                                class="modal__register-link"
                                :to="{ name: 'register' }"
                                @click="closeModal"
                                >Register</router-link
                            >
                        </div>
                    </form>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import IconUsername from '@/components/icons/IconUsername.vue';
import IconPassword from '@/components/icons/IconPassword.vue';
import IconClose from '@/components/icons/IconClose.vue';
import ItemDarkOverlay from '@/components/common/ItemDarkOverlay.vue';
import { useOverlay } from '@/use/useOverlay';

const {
    state: modalState,
    close: closeModal,
    focusRef,
    clickOutsideRef,
} = useOverlay('modalLogin');
</script>

<style scoped lang="scss">
.modal {
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
