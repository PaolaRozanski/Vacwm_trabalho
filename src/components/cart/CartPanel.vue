<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'

const cartItems = inject('cartItems')

function remover(id) {
  cartItems.value = cartItems.value.filter(i => i.id !== id)
}

function acrescentar(id) {
  cartItems.value = cartItems.value.map(item =>
    item.id === id && item.quantity < item.estoque
      ? { ...item, quantity: item.quantity + 1 }
      : item
  )
}

function decrementar(id) {
  const item = cartItems.value.find(i => i.id === id)
  if (!item) return
  if (item.quantity > 1) {
    cartItems.value = cartItems.value.map(i =>
      i.id === id ? { ...i, quantity: i.quantity - 1 } : i
    )
  } else {
    remover(id)
  }
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
    <CartSummary :items="cartItems" />
  </div>
</template>
