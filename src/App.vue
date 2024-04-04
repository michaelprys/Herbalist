<template>
    <AppHeader></AppHeader>
    <main>
        <RouterView #="{ Component }">
            <Transition mode="out-in" name="fade">
                <component :is="Component" :key="route.path" />
            </Transition>
        </RouterView>
    </main>
    <AppFooter></AppFooter>
    <AppModal></AppModal>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import AppModal from '@/components/layout/AppModal.vue';

import { useRouter } from 'vue-router';
const route = useRouter();
</script>

<style scoped lang="scss">
@import '@/styles/abstracts/animations.scss';
</style>
