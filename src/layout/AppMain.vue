<template>
    <main>
        <!-- <RouterView #="{ Component }">
            <Transition mode="out-in" name="fade">
                <component :is="Component" :key="route.path" />
            </Transition>
        </RouterView> -->
        <RouterView />
    </main>
</template>

<script setup>
// import { useRouter } from 'vue-router';

// const route = useRouter();
</script>

<style lang="scss">
@import '../assets/scss/util/animation.scss';
</style>
