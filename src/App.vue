<template>
  <div class="global-container">
    <header class="header">
      <AppHeader></AppHeader>
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="footer">
      <AppFooter></AppFooter>
    </footer>
  </div>
</template>

<script setup>
import AppHeader from "@/layout/AppHeader.vue";
import AppFooter from "@/layout/AppFooter.vue";
</script>
