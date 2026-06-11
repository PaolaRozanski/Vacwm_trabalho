<script setup>
import { computed, ref } from 'vue'
import { formataPreco } from '@/utils/currencyUtils'
import CartCheckout from './CartCheckout.vue'

const props = defineProps({
  items: { type: Array, default: () => [] },
})

const subtotal = computed(() =>
  props.items.reduce((sum, item) => sum + item.preco * item.quantity, 0)
)

const totalItens = computed(() =>
  props.items.reduce((sum, item) => sum + item.quantity, 0)
)

const modalAberto = ref(false)

</script>


<template>
  <div v-if="props.items.length > 0" class="summary">
    <h3 class="titulo">Total:</h3>

    <div class="bloco_summary">
      <span>( {{ totalItens }} {{ totalItens === 1 ? 'item' : 'itens' }} )</span>
      <span class="valor_total">{{ formataPreco(subtotal) }}</span>
    </div>

    <button class="comprar" @click="modalAberto = true">
      Finalizar compra
    </button>

  <CartCheckout
    v-if="modalAberto"
    :items="props.items"
    @fechar="modalAberto = false"
  />

  </div>
</template>


<style scoped>
.summary {
  background: #1a1a24;
  padding: 20px;
  color: #fff;
}

.titulo {
  font-family: 'Oxanium', sans-serif;
  color: #ffea75;
  margin: 0 0 16px;
  font-size: 2vw;
}

.bloco_summary {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.1rem;
}

.valor_total {
  color: #ffea75;
}

.comprar {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: #ffea75;
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;
}

.comprar:hover {
  opacity: 0.85;
}
</style>