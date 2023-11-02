<template>
    <div class="letters">
        <router-link
            class="letters__item"
            :to="{ name: 'recipesByLetter', params: { letter } }"
            v-for="letter in letters"
            :key="letter">
            {{ letter }}
        </router-link>
        {{ ingredients }}
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { axiosClient } from '@/axiosClient.js';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const ingredients = ref([]);

onMounted(async () => {
    const res = await axiosClient.get('/list.php?i=list');
    console.log(res.data);
    ingredients.value = res.data;
});
</script>

<style lang="scss">
.letters {
    @include bar;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: $mt-36;
    font-weight: $fw-regular;
    &__item {
        padding-inline: 0.3125rem;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            background-color: $c-white;
            transition: $tr-smooth;
            transform: translateX(-50%);
            left: 50%;
        }
        &:hover::after {
            width: 20px;
        }
    }
}
</style>
