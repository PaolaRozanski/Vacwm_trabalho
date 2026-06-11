<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { formataPreco } from '@/utils/currencyUtils'
import ProductShop from './ProductShop.vue'
import ButtonAddCart from '../buttons/ButtonAddCart.vue'

const props = defineProps({
  id: Number,
  nome: String,
  preco: Number,
  imagem: String,
  categoria: String,
  estoque: Number,
  marca: String,
  avaliacao: Number,
  descricao: String,
  salvar: Boolean,
  quant_avaliacao: Number,
})

const cartItems = inject('cartItems')
const router = useRouter()

const curtido = ref(false)
const modalAberto = ref(false)

function curtirProduto() {
  curtido.value = !curtido.value
}

function quant_prod_cart(id) {
  return cartItems.value.find(item => item.id === id)?.quantity ?? 0
}

function add_cart(produto) {
  const existe = cartItems.value.find(item => item.id === produto.id)

  if (existe) {
    if (existe.quantity < produto.estoque) {
      cartItems.value = cartItems.value.map(item =>
        item.id === produto.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    }
  } else {
    cartItems.value = [...cartItems.value, { ...produto, quantity: 1 }]
  }
}
</script>

<template>
  <div class="produto">
    <div class="topo">
      <span class="categoria">{{ categoria }}</span>
      <button class="curtir" :class="{ ativo: curtido }" @click="curtirProduto">
        {{ curtido ? '♥' : '♡' }}
      </button>
    </div>

    <div class="imagem-box">
      <img :src="imagem" :alt="nome" class="imagem">
    </div>

    <div class="info">
      <h3 class="nome">{{ nome }}</h3>

      <div class="avaliacoes">
        <span
          v-for="n in 5"
          :key="n"
          class="estrela"
          :class="{ ativa: n <= Number(avaliacao) }"
        >★</span>
        <span>{{ avaliacao }}</span>
      </div>

      <p class="preco">{{ formataPreco(preco) }}</p>

      <div class="botoes">

        <button class="botao vermais" @click="router.push(`/produto/${id}`)">
          Ver mais
        </button>

        <ButtonAddCart
          class="botao adicionar"
          :produto="{ id, nome, preco, imagem, categoria, estoque, marca, avaliacao, descricao }"
          :quantos="quant_prod_cart(id)"
          @adicionar_cart="add_cart"
        />
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
  color: #444;
}

.estrela.ativa {
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
  margin-top: 8px;
}

.botao {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 600;
}

.adicionar {
  background: #7c3aed;
  border: none;
  color: white;
  border-radius: 8px;
}

.adicionar:hover {
  background: #6d28d9;
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

