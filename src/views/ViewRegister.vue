<template>
    <div class="register-wrapper">
        <div class="container">
            <section class="register">
                <form class="register__form" action="">
                    <button class="register__close-btn" type="button"></button>
                    <h1 class="register__title">Join us</h1>

                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="First name" />
                        <IconUsername class="register__input-icon" />
                    </div>
                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="Last name" />
                        <IconUsername class="register__input-icon" />
                    </div>
                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="Username" />
                        <IconUsername class="register__input-icon" />
                    </div>

                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="Password" />
                        <IconPassword class="register__input-icon" />
                    </div>

                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="Repeat password" />
                        <IconPassword class="register__input-icon" />
                    </div>
                    <div class="register__button-wrapper">
                        <button class="register__button" type="submit">
                            Join
                        </button>
                    </div>
                </form>
                <!-- <div class="register__complete">
                    <span class="register__success"
                        >You have successfully registered and logged in! <br /> You're being redirected...</span
                    >
                </div> -->
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconUsername from '@/components/icons/IconUsername.vue';
import IconPassword from '@/components/icons/IconPassword.vue';
import IconClose from '@/components/icons/IconClose.vue';
</script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.register-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100svh;
    @include bg;
    background-image: url('@/assets/images/section/register/bg.jpg');
}
.register {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: $br-8;
    margin-top: $m-20;
    max-width: 45rem;
    width: 100%;
    min-height: 38.5rem;
    background-color: rgba(32, 43, 44, 0.944);
    padding-block: $p-10;
    padding-inline: $p-20;
    margin-inline: auto;
    border-radius: $br-8;
    box-shadow: $dc-shadow-light;
    border: $bw-2 solid rgba($c-grey-300, 0.3);
    transition: transform $tr-basic;
    &__form {
        width: 100%;
    }
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
    &__title {
        font-weight: $fw-bold;
        font-size: $fs-h2;
        text-align: center;
    }
    &__input-wrapper {
        position: relative;
        margin-top: $m-8;
        width: 100%;
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
    &__button-wrapper {
        display: flex;
        justify-content: center;
    }
    &__button {
        @include button-style($c-citrus);
        margin-block: $m-10;
        border-radius: $br-full;
        background-color: $c-white;
        width: 70%;
    }
    &__complete {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: $g-4;
    }
    &__success {
        font-size: $fs-h4;
    }
}
</style>
