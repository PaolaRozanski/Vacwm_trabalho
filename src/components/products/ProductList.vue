<script setup>
import ProductCards from './ProductCards.vue';
import { produtos } from '@/data/products'
</script>

<template>
  <section class="lista-produtos">
    <ProductCards
      v-for="produto in produtos"
      :key="produto.id"
      v-bind="produto"
    />
  </section>
</template>

<style scoped>
.lista-produtos {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 24px;

  padding: 2rem;
}
</style>
