<template>
    <main>
        <RouterView #="{ Component }">
            <transition mode="out-in" name="fade">
                <component :is="Component" :key="$route.fullPath" />
            </transition>
        </RouterView>
    </main>
</template>

<script setup></script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
    opacity: $op-0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}
</style>
