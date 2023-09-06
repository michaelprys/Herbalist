<template>
  <header class="header">
    <Navigation></Navigation>
  </header>
  <main>
    <ViewHome></ViewHome>
  </main>
  <AppFooter></AppFooter>
</template>

<script setup>
import Navigation from "@/layout/Navigation.vue";
import AppFooter from "@/layout/AppFooter.vue";
import ViewHome from "@/views/ViewHome.vue";
</script>

<style lang="scss">
.container {
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;
}

.container--nav {
  padding-inline: 1.5rem;
}

.container--footer {
  width: 71.6875rem;
}

.header {
  background-color: $c-light-grey;
  background-size: cover;
  display: flex;
  align-items: center;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
  .container--nav {
    max-width: 1280px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
  .container--nav {
    max-width: 1280px;
  }
}

@media (min-width: 1040px) {
  .container {
    max-width: 1040px;
  }
  .container--nav {
    max-width: 1280px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
  .container--footer {
    padding-inline: 0;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
</style>
