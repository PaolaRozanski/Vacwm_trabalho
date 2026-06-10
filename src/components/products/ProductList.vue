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
  min-height: 100vh;
  background-color: #0f0f17;
  padding: 30px;
}

.titulo {
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
}

.pesquisa {
  margin-bottom: 30px;
}

.pesquisa input {
  width: 100%;
  padding: 14px 18px;
  background-color: #1a1a24;
  color: white;
  border: 1px solid #2a2a3a;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
}

.pesquisa input::placeholder {
  color: #8b8b9b;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  align-items: start;
}

@media (max-width: 1300px) {
  .produtos {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1000px) {
  .produtos {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 700px) {
  .produtos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .produtos {
    grid-template-columns: 1fr;
  }
}
</style>

