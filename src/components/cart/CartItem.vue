<script setup>
import { computed } from 'vue'
import { formataPreco } from '@/utils/currencyUtils';

const props = defineProps({
  items: { type: Array, default: () => [] },
})

defineEmits([ 'remove', 'acrescentar', 'decrementar'])

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

            <img :src="item.imagem" :alt="item.nome" style="width: 60px; height: 60px; object-fit: cover;">
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

</style>
