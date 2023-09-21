<template>
  <AppHeader></AppHeader>
  <!-- <div class="overlay" :class="{ active: showMobileNav }"> -->
  <main class="container">
    <RouterView #="{ Component }">
      <transition mode="out-in" name="fade">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
  <AppFooter></AppFooter>
  <!-- </div> -->
</template>

<script setup>
import AppHeader from "@/layout/AppHeader.vue";
import AppFooter from "@/layout/AppFooter.vue";
</script>

<style lang="scss">
// .overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 100;
//   display: none;
//   transition: background-color $tr-smooth;
//   &.active {
//     display: block;
//   }
// }

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity $tr-smooth;
}
</style>
