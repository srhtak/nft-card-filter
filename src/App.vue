<script setup>
import Navbar from "./components/AppNavbar.vue";
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
html {
  background-image: url(../src/assets/bg.jpg);
}
</style>
