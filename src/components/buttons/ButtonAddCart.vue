<script setup>

import { ref, computed } from 'vue';

const props = defineProps({
    produto: {type: Object, required: true},
    quantos: {type: Number, default: 0},
})

const emit = defineEmits(['adicionar_cart'])
const adicionado = ref(false)

const em_estoque = computed(() => props.produto.estoque - props.quantos)
const zero_prod = computed(() => props.produto.estoque === 0)
const limite = computed(() => em_estoque.value <= 0 && !zero_prod.value)

function frase() {
    if (zero_prod.value) {
        return 'Sem Estoque'
    } else if (limite.value) {
        return 'Limite Atingido'
    } else if (adicionado.value) {
        return 'Adicionado!'
    } else {
        return 'Adicionar'
    }
}

function almost_add() {
  if (zero_prod.value || limite.value) return

  emit('adicionar_cart', props.produto)
  adicionado.value = true
  setTimeout(() => {
    adicionado.value = false
  }, 1000)
}

</script>

<template>

    <button class="add_ao_carrinho" :class="{'sem_produtos': zero_prod, 'passado_limite': limite, 'added': adicionado,}" :disabled="zero_prod || limite" @click="almost_add" >

        {{ frase() }}

        <span v-if="em_estoque > 0 && em_estoque <= 3" class="escrita_estoque">
            {{ em_estoque }} restante{{ em_estoque !== 1 ? 's' : '' }}
        </span>

    </button>

</template>

<style scoped>
</style>
