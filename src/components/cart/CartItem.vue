<script setup>
import { computed } from 'vue'
import { formataPreco } from '@/utils/currencyUtils';

const props = defineProps({
  items: { type: Array, default: () => [] },
})

const emit = defineEmits([ 'remove', 'acrescentar', 'decrementar'])

const totalItems = computed(() => props.items.reduce((s, i) => s + i.quantity, 0))

</script>


<template>
      <div class="cart_header">
      <h2 class="cart_title">
        Carrinho
        <span v-if="totalItems > 0" class="cart_count">{{ totalItems }}</span>
      </h2>
    </div>

        <div v-if="items.length === 0" class="cart_empty">
          <p>Nenhum item adicionado ainda.</p>
        </div>

        <ul v-else class="cart_items">

          <li v-for="item in items" :key="item.id" class="cart_item">
            
            <img :src="item.imagem" :alt="item.nome">
            <div class="item__info">
              <p>{{ item.nome }}</p>
              <p>{{ formataPreco(item.preco) }}</p>
            </div>
            <div class="item__controls">
              <button class="quant" :disabled="item.quantity <= 1" @click="$emit('decrementar', item.id)">-</button>
              <p>{{ item.quantity }}</p>
              <button class="quant" :disabled="item.quantity >= item.estoque" @click="$emit('acrescentar', item.id)">+</button>
            </div>
            <button class="item__remove" @click="$emit('remove', item.id)">x</button>
          </li>
        </ul>
</template>

<style scoped>
.cart_header {
  padding: 16px;
  border-bottom: 1px solid rgba(124, 58, 237, 0.2);
}

.cart_title {
  margin: 0;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.cart_count {
  background: #7c3aed;
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 20px;
}

.cart_empty {
  padding: 32px 16px;
  text-align: center;
  color: #9692b0;
}

.cart_items {
  list-style: none;
  margin: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cart_item {
  background: #1a1a24;
  border: 2px solid rgba(124, 58, 237, 0.2);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: 0.2s;
}

.cart_item:hover {
  transform: translateY(-2px);
}

.cart_item img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  background: #22222e;
  padding: 4px;
}

.item__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item__info p {
  margin: 0;
}

.item__info p:first-child {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
}

.item__info p:last-child {
  color: #a78bfa;
  font-size: 0.85rem;
  font-weight: bold;
}

.item__controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.item__controls p {
  margin: 0;
  color: #fff;
  font-size: 0.9rem;
  min-width: 20px;
  text-align: center;
}

.quant {
  background: #22222e;
  border: 1px solid rgba(124, 58, 237, 0.3);
  color: #a78bfa;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.quant:hover:not(:disabled) {
  background: #7c3aed;
  color: #fff;
  border-color: #7c3aed;
}

.quant:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.item__remove {
  background: none;
  border: 1px solid rgba(229, 62, 62, 0.3);
  color: #fc8181;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.item__remove:hover {
  background: #e53e3e;
  color: #fff;
  border-color: #e53e3e;
}
</style>