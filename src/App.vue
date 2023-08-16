<template>
  <header class="header">
    <div class="container">
      <NavBar></NavBar>
    </div>
  </header>
</template>

<!-- script -->

<script setup>
import NavBar from "@/layout/NavBar.vue";
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
}

@media (max-width: 1024px) {
  .container {
    padding: 0 50px;
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 30px;
  }
}
@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }
}
</style>
