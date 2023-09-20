<template>
  <div class="global-container">
    <AppHeader></AppHeader>
    <main class="container">
      <transition mode="out-in" name="fade">
        <RouterView />
      </transition>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script setup>
import AppHeader from "@/layout/AppHeader.vue";
import AppFooter from "@/layout/AppFooter.vue";
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
</style>
