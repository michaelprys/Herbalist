<template>
    <AppHeader></AppHeader>
    <main class="container">
        <RouterView #="{ Component }">
            <transition mode="out-in" name="fade">
                <component :is="Component" />
            </transition>
        </RouterView>
    </main>
    <AppFooter></AppFooter>
</template>

<script setup>
import AppHeader from '@/layout/AppHeader.vue';
import AppFooter from '@/layout/AppFooter.vue';
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
    opacity: $op-0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s ease;
}
</style>
