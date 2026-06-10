<script setup>
import ProductCards from '../products/ProductCards.vue';
import { produtos } from '@/data/products.js';
</script>

<template>
  <div class="vitrine-produtos">
    <ProductCards
      v-for="produt in produtos"
      :key="produt.id"
      :nome="produt.nome"
      :marca="produt.marca"
      :preco="produt.preco"
      :avaliacao="produt.avaliacao"
      :quant_avaliacao="produt.quant_avaliacao"
      :imagem="produt.imagem"
      :categoria="produt.categoria"
      :descricao="produt.descricao"
      :estoque="produt.estoque"
      :salvar="produt.salvar"
    />
  </div>
</template>

<style scoped>

</style>
