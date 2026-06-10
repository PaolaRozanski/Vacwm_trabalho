<script setup>
import { ref } from 'vue'
import ButtonChild from '../buttons/ButtonChild.vue'
import { formataPreco } from '@/utils/currencyUtils.js'

const props = defineProps(['nome', 'preco', 'categoria', 'id'])

const emit = defineEmits(['fechar', 'atualizarPreco'])

const novoPreco = ref(props.preco)

function atualizaPreco() {
  emit('atualizarPreco', {
    id: props.id,
    preco: novoPreco.value
  })

  emit('fechar')
}
</script>

<template>
  <div class="overlay">
    <div class="produto-dialog">
      <h2>{{ props.nome }}</h2>

      <p>
        Preço: {{ formataPreco(props.preco) }}
      </p>

      <p>
        Categoria: {{ props.categoria }}
      </p>

      <input
        type="number"
        v-model.number="novoPreco"
      />

      <ButtonChild @clique="atualizaPreco">
        Corrigir preço
      </ButtonChild>

      <ButtonChild @clique="$emit('fechar')">
        Fechar
      </ButtonChild>
    </div>
  </div>
</template>

<style scoped>
</style>
