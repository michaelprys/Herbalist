<template>
  <body>
    <header class="header">
      <div class="container">
        <NavBar></NavBar>
      </div>
    </header>
    <main>
      <div class="container">
        <ViewHome></ViewHome>
      </div>
    </main>
  </body>
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
  margin-inline: auto;
  // padding-inline: 15px;
  margin-inline: auto;
}

.header {
  background-color: #1b1c1c;
  min-height: 120px;
  display: flex;
  align-items: center;
}
</style>
