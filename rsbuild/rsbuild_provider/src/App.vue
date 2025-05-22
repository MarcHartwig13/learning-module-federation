<script setup lang="ts">
  import Provider from './components/ProviderComponent.vue';
</script>

<template>
  <div class="content">
    <Provider />
  </div>
</template>

<style>
body {
  margin: 0;
  color: #fff;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  background-image: linear-gradient(to bottom, #020917, #101725);
}

.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

</style>
