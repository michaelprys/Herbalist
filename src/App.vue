<template>
  <div class="global-container">
    <AppHeader></AppHeader>
    <main class="container">
      <RouterView @routeChange="closeMobileNav" />
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script setup>
import AppHeader from "@/layout/AppHeader.vue";
import AppFooter from "@/layout/AppFooter.vue";
</script>
