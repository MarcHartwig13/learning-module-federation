<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue';

  const isLoadingComponent = ref(true);
  const Provider = defineAsyncComponent(() =>
      import('webpack_provider/ProviderComponent.vue').finally(() => {
        isLoadingComponent.value = false;
      }),
  );
</script>

<template>
  <div class="content">
    <div v-if="isLoadingComponent">Loading HelloWorld.vue</div>
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
