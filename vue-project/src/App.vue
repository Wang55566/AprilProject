<template>
  <main>
    <div>
      <h4>The current count is...</h4>
      <h1>{{ count }}</h1>
      <button @click="add">+</button>
      <button @click="minus">-</button>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const add = () => {
  count.value++;
}

const minus = () => {
  count.value--;
}
</script>
<style scoped>
main {
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  text-align: center;
}
</style>
