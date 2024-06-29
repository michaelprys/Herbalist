<template>
    <div class="register-wrapper">
        <div class="container">
            <section class="register">
                <form class="register__form" @submit.prevent="register">
                    <button class="register__close-btn" type="button"></button>
                    <h1 class="register__title">Join us</h1>

                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="First name"
                            v-model="userData.firstname" />
                        <IconUsername class="register__input-icon" />
                    </div>
                    <template v-if="issues?.firstname">
                        <span
                            class="register__errors"
                            v-for="(issue, i) in issues.firstname"
                            :key="i"
                            >{{ issue }}</span
                        >
                    </template>
                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="Last name"
                            v-model="userData.lastname" />
                        <IconUsername class="register__input-icon" />
                    </div>
                    <template v-if="issues?.lastname">
                        <span
                            class="register__errors"
                            v-for="(issue, i) in issues.lastname"
                            :key="i"
                            >{{ issue }}</span
                        >
                    </template>

                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="@example.com"
                            v-model="userData.email" />
                        <IconEmail class="register__input-icon" />
                    </div>
                    <template v-if="issues?.email">
                        <span
                            class="register__errors"
                            v-for="(issue, i) in issues.email"
                            :key="i"
                            >{{ issue }}</span
                        >
                    </template>
                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="Username"
                            v-model="userData.username" />
                        <IconName class="register__input-icon" />
                    </div>
                    <template v-if="issues?.username">
                        <span
                            class="register__errors"
                            v-for="(issue, i) in issues.username"
                            :key="i"
                            >{{ issue }}</span
                        >
                    </template>
                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="Password"
                            v-model="userData.password" />
                        <IconPassword class="register__input-icon" />
                    </div>
                    <template v-if="issues?.password">
                        <span
                            class="register__errors"
                            v-for="(issue, i) in issues.password"
                            :key="i"
                            >{{ issue }}</span
                        >
                    </template>
                    <div class="register__input-wrapper">
                        <input
                            class="register__input"
                            type="text"
                            placeholder="Confirm password"
                            v-model="userData.confirmPassword" />
                        <IconPassword class="register__input-icon" />
                    </div>
                    <template v-if="issues?.confirmPassword">
                        <span
                            class="register__errors"
                            v-for="(issue, i) in issues.confirmPassword"
                            :key="i"
                            >{{ issue }}</span
                        >
                    </template>
                    <div class="register__button-wrapper">
                        <button class="register__button">Join</button>
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
import IconName from '@/components/icons/IconName.vue';
import IconUsername from '@/components/icons/IconUsername.vue';
import IconPassword from '@/components/icons/IconPassword.vue';
import IconEmail from '@/components/icons/IconEmail.vue';
import { useStoreAuth } from '@/stores/storeAuth';
import { reactive, watchEffect } from 'vue';
import { ref } from 'vue';
import {
    object,
    pipe,
    string,
    minLength,
    nonEmpty,
    email,
    safeParse,
    regex,
    flatten,
    forward,
    partialCheck,
    InferInput,
    config,
    type FlatErrors,
} from 'valibot';

const storeAuth = useStoreAuth();

const letters = new RegExp(/^\p{L}+$/u);

const UserSchema = pipe(
    config(
        object({
            firstname: pipe(
                string(),
                nonEmpty('First name is required'),
                regex(letters, 'First name must consist of letters')
            ),
            lastname: pipe(
                string(),
                nonEmpty('Last name is required'),
                regex(letters, 'Last name must consist of letters')
            ),
            username: pipe(string(), nonEmpty('Username name is required')),
            email: pipe(
                string(),
                nonEmpty('Email is required'),
                email('The email must be in the format name@example.com')
            ),
            password: pipe(
                string(),
                nonEmpty('Password is required'),
                minLength(6, 'Password must be at least 6 characters long')
            ),
            confirmPassword: string(),
        }),
        {
            abortPipeEarly: true,
        }
    ),
    forward(
        partialCheck(
            [['password'], ['confirmPassword']],
            input => input.password === input.confirmPassword,
            'Passwords do not match'
        ),
        ['confirmPassword']
    )
);

type UserData = InferInput<typeof UserSchema>;

const userData: UserData = reactive({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
});

const issues = ref<FlatErrors<typeof UserSchema>['nested']>();

const register = async () => {
    const result = safeParse(UserSchema, userData);

    if (result.success) {
        issues.value = undefined;
        await storeAuth.register(userData);
    } else {
        issues.value = flatten<typeof UserSchema>(result.issues).nested;
    }
};
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
    padding-block: $p-20;
    background-attachment: fixed;
    @include bg;
    @supports (background-image: url('@img/section/intro/bg.avif')) {
        background-image: url('@img/section/intro/bg.avif');
    }
    background-image: url('@img/section/intro/bg.jpg');
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
    &__errors {
        display: block;
        color: rgb(255, 128, 128);
        font-size: $fs-medium;
        padding-left: calc($p-6 - 2px);
        margin-top: $m-2_5;
    }
}
</style>
