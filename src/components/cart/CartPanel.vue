<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const cartItems = inject('cartItems')

function remover(id) {
  cartItems.value = cartItems.value.filter(i => i.id !== id)
}
function acrescentar(id) {
  const item = cartItems.value.find(i => i.id === id)
  if (item && item.quantity < item.estoque) item.quantity++
}
function decrementar(id) {
  const item = cartItems.value.find(i => i.id === id)
  if (!item) return
  if (item.quantity > 1) item.quantity--
  else remover(id)
}
</script>

<template>
  <div class="cart-panel">
    <CartItem
      :items="cartItems"
      @remove="remover"
      @acrescentar="acrescentar"
      @decrementar="decrementar"
    />
  </div>
</template>
