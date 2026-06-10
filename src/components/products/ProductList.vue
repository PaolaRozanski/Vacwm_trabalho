<script setup>
import { ref, computed } from 'vue'
import ProductCards from './ProductCards.vue'
import { produtos } from '@/data/products'

const pesquisa = ref('')

const produtosFiltrados = computed(() => {
  return produtos.filter(produto =>
    produto.nome.toLowerCase().includes(
      pesquisa.value.toLowerCase()
    )
  )
})
</script>

<template>
  <section class="lista-produtos">

    <div class="pesquisa">
      <input
        v-model="pesquisa"
        type="text"
        placeholder="Pesquisar produto..."
      >
    </div>

    <div class="produtos">

      <ProductCards
        v-for="produto in produtosFiltrados"
        :key="produto.id"
        :id="produto.id"
        :nome="produto.nome"
        :preco="produto.preco"
        :imagem="produto.imagem"
        :categoria="produto.categoria"
      />

    </div>

  </section>
</template>

<style scoped>
.lista-produtos {
  padding: 20px;
}

.pesquisa {
  margin-bottom: 20px;
}

.pesquisa input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
}

.produtos {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
