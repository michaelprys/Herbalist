<template>
  <div class="global-wrapper">
    <header class="header">
      <Navigation></Navigation>
    </header>
    <main>
      <ViewHome></ViewHome>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script setup>
import Navigation from "@/layout/Navigation.vue";
import AppFooter from "@/layout/AppFooter.vue";
import ViewHome from "@/views/ViewHome.vue";
</script>

<style lang="scss">
.global-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.header {
  background-color: $c-light-grey;
  background-size: cover;
  display: flex;
  align-items: center;
}
.skeleton {
  // opacity: 0.7;
  animation: $skeleton;
}

.skeleton-text {
  width: 100%;
  height: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 0.125rem;
  &:last-child {
    margin-bottom: 0;
    width: 80%;
  }
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

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
