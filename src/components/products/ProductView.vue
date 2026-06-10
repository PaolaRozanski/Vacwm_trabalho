<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { produtos } from '@/data/products'
import { formataPreco } from '@/utils/currencyUtils'
import ProductShop from './ProductShop.vue'

const route = useRoute()
const router = useRouter()

const modalAberto = ref(false)

const produto = computed(() =>
  produtos.find(p => p.id === Number(route.params.id))
)
</script>

<template>
  <div class="pagina" v-if="produto">

    <button class="voltar" @click="router.back()">← Voltar</button>

    <div class="conteudo">
      <div class="img-wrap">
        <img :src="produto.imagem" :alt="produto.nome" class="img" />
      </div>

      <div class="info">
        <span class="categoria">{{ produto.categoria }}</span>
        <h1 class="nome">{{ produto.nome }}</h1>
        <p class="marca">{{ produto.marca }}</p>

        <div class="avaliacao">
          <span class="estrela">★</span>
          <span>{{ produto.avaliacao }}</span>
          <span class="muted">/ 5</span>
        </div>

        <p class="descricao">{{ produto.descricao }}</p>

        <p class="preco">{{ formataPreco(produto.preco) }}</p>
        <p class="estoque" :class="{ baixo: produto.estoque < 5 }">
          {{ produto.estoque > 0 ? `${produto.estoque} em estoque` : 'Fora de estoque' }}
        </p>

        <button class="botao-comprar" @click="modalAberto = true">Comprar</button>
      </div>
    </div>

  </div>

  <div class="pagina" v-else>
    <p>Produto não encontrado.</p>
    <button class="voltar" @click="router.back()">← Voltar</button>
  </div>

  <ProductShop
    v-if="modalAberto && produto"
    :id="produto.id"
    :nome="produto.nome"
    :preco="produto.preco"
    :categoria="produto.categoria"
    @fechar="modalAberto = false"
  />
</template>

<style scoped>
.pagina {
  background: #0f0f13;
  color: #f0eefb;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  padding: 8rem 3rem 3rem;
}

.voltar {
  background: none;
  border: none;
  color: #a78bfa;
  font-size: 0.95rem;
  cursor: pointer;
  margin-bottom: 2rem;
  padding: 0;
}
.voltar:hover { color: #fff; }

.conteudo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  max-width: 900px;
  margin: 0 auto;
}

.img-wrap {
  background: #22222e;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  aspect-ratio: 1;
}
.img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.categoria {
  font-size: 0.75rem;
  color: #a78bfa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}
.nome {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  line-height: 1.2;
}
.marca {
  color: #9692b0;
  font-size: 0.9rem;
  margin: 0;
}
.avaliacao {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9rem;
}
.estrela { color: #f6c90e; }
.muted { color: #9692b0; font-size: 0.8rem; }

.descricao {
  color: #c4c0d8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0.5rem 0;
}
.preco {
  font-size: 1.8rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
}
.estoque {
  font-size: 0.82rem;
  color: #68d391;
  margin: 0;
}
.estoque.baixo { color: #fc8181; }

.botao-comprar {
  margin-top: 0.5rem;
  background: #7c3aed;
  color: #fff;
  border: none;
  padding: 0.85rem 2.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  width: fit-content;
}
.botao-comprar:hover { background: #6d28d9; }

@media (max-width: 700px) {
  .conteudo { grid-template-columns: 1fr; }
  .pagina { padding: 7rem 1.5rem 2rem; }
}
</style>

