<template>
  <div class="global-container">
    <header class="header" :class="{ hidden: hideHeader }"></header>
    <AppHeader></AppHeader>
    <main class="container">
      <RouterView />
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script setup>
import AppHeader from "@/layout/AppHeader.vue";
import AppFooter from "@/layout/AppFooter.vue";
import { ref } from "vue";
</script>

<style lang="scss"></style>
