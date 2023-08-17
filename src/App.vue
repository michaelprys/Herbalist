<template>
  <header class="header">
    <div class="container">
      <NavBar></NavBar>
    </div>
  </header>
  <body>
    <main>
      <div class="container">
        <ViewHome></ViewHome>
      </div>
    </main>
  </body>

  <RouterView />
</template>

<!-- script -->

<script setup>
import NavBar from "@/layout/NavBar.vue";
import ViewHome from "@/views/ViewHome.vue";
</script>

<!-- style -->

<style lang="scss">
.container {
  max-width: 80%;
  padding-inline: 15px;
  margin-inline: auto;
}

.header {
  background-color: rgb(0, 0, 0, 90%);
  min-height: 120px;
  display: flex;
  align-items: center;
}
</style>
