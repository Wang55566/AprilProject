<template>
  <div class="container">
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from '../components/Navbar.vue';
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
