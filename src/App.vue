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
.container{
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;
}

@media (min-width: 640px){
  .container{
    max-width: 640px
  }
}

@media (min-width: 768px){
  .container{
    max-width: 768px
  }
}

@media (min-width: 1040px){
  .container{
    max-width: 1040px
  }
}

@media (min-width: 1280px){
  .container{
    max-width: 1280px
  }
}

@media (min-width: 1536px){
  .container{
    max-width: 1536px
  }
}

.header {
  background-color: #1b1c1c;
  min-height: 120px;
  display: flex;
  align-items: center;
}
</style>
