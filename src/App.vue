<script setup>
import { ref, provide } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';

const cartItems = ref([])
provide('cartItems', cartItems)

</script>

<template>

  <AppHeader />

  <main>
    <RouterView />
  </main>

  <AppFooter />

</template>

<style scoped>

</style>
