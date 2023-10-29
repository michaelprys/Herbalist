<template>
    <div class="letters">
        <router-link
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
    margin-top: $m-content;
    gap: 12px;
    font-weight: 400;
}
</style>
