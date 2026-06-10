<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { formataPreco } from '@/utils/currencyUtils'
import ProductShop from './ProductShop.vue'

const props = defineProps([
  'id',
  'nome',
  'preco',
  'imagem',
  'categoria',
  'avaliacao'
])

const router = useRouter()

const curtido = ref(false)
const modalAberto = ref(false)

function curtirProduto() {
  curtido.value = !curtido.value
}

function abrirModal() {
  modalAberto.value = true
}
</script>

<template>
  <div class="produto">
    <div class="topo">
      <span class="categoria">
        {{ categoria }}
      </span>

      <button
        class="curtir"
        :class="{ ativo: curtido }"
        @click="curtirProduto"
      >
        {{ curtido ? '♥' : '♡' }}
      </button>
    </div>

    <div class="imagem-box">
      <img
        :src="imagem"
        :alt="nome"
        class="imagem"
      >
    </div>

    <div class="info">
      <h3 class="nome">
        {{ nome }}
      </h3>

      <div class="avaliacao">
        <span class="estrela">★</span>
        <span>{{ avaliacao }}</span>
        <span>/ 5</span>
      </div>

      <p class="preco">
        {{ formataPreco(preco) }}
      </p>

      <div class="botoes">
        <button class="botao" @click="abrirModal">
          Comprar
        </button>

        <button
          class="botao vermais"
          @click="router.push(`/produto/${id}`)"
        >
          Ver mais
        </button>
      </div>
    </div>
  </div>

  <ProductShop
    v-if="modalAberto"
    :id="props.id"
    :nome="props.nome"
    :preco="props.preco"
    :categoria="props.categoria"
    @fechar="modalAberto = false"
  />
</template>

<style scoped>
.produto {
  background: #1a1a24;
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
}

.topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
}

.categoria {
  color: #a78bfa;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.curtir {
  background: none;
  border: none;
  color: #9692b0;
  font-size: 22px;
  cursor: pointer;
}

.curtir.ativo {
  color: #e53e3e;
}

.imagem-box {
  background: #22222e;
  margin: 0 12px;
  height: 140px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagem {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.info {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nome {
  margin: 0;
  color: #fff;
  font-size: 15px;
}

.avaliacao {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #fff;
  font-size: 13px;
}

.avaliacao span:last-child {
  color: #9692b0;
}

.estrela {
  color: #f6c90e;
}

.preco {
  margin: 0;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.botoes {
  display: flex;
  gap: 8px;
}

.botao {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #7c3aed;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;
}

.vermais {
  background: transparent;
  border: 1px solid #7c3aed;
  color: #a78bfa;
}

.vermais:hover {
  background: #7c3aed;
  color: #fff;
}
</style>

