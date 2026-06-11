<script setup>
import { ref, computed } from 'vue'
import { formataPreco } from '@/utils/currencyUtils'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits([
  'fechar'
])

const subtotal = computed(() =>
  props.items.reduce(
    (sum, item) => sum + item.preco * item.quantity,
    0
  )
)

const nomeCliente = ref('')
const telefoneCliente = ref('')
const enderecoCliente = ref('')
const etapa = ref('formulario')

function finalizar() {
  if (
    !nomeCliente.value.trim() ||
    !telefoneCliente.value.trim() ||
    !enderecoCliente.value.trim()
  ) {
    alert('Por favor, preencha todos os campos.')
    return
  }

  etapa.value = 'sucesso'
}

function fechar() {
  nomeCliente.value = ''
  telefoneCliente.value = ''
  enderecoCliente.value = ''
  etapa.value = 'formulario'
  emit('fechar')
}
</script>

<template>

  <div class="overlay" @click.self="fechar">
    <div class="modal">
      <template v-if="etapa === 'formulario'">
        <button class="btn-fechar" @click="fechar">✕</button>
        <h2 class="titulo">Finalizar Compra</h2>

        <div
            v-for="item in props.items"
            :key="item.id"
            class="produto-item">
            <p><span>{{ item.quantity }}x</span> {{ item.nome }}</p>
        </div>

        <div class="divider"></div>

        <div class="campo">
          <label>Nome completo</label>
          <input v-model="nomeCliente" type="text" placeholder="Seu nome" />
        </div>

        <div class="campo">
          <label>Telefone</label>
          <input v-model="telefoneCliente" type="tel" placeholder="(11) 99999-9999" />
        </div>

        <div class="campo">
          <label>Endereço de entrega</label>
          <input v-model="enderecoCliente" type="text" placeholder="Rua, número, cidade..." />
        </div>

        <p class="totall">Total: {{ formataPreco(subtotal) }}</p>

        <button class="btn-comprar" @click="finalizar">
          Confirmar Pedido
        </button>
      </template>

      <!-- ETAPA: Sucesso -->
      <template v-else>
        <div class="sucesso">
          <div class="icone-sucesso">✓</div>
          <h2 class="titulo">Parabéns!</h2>
          <p class="sucesso-msg">Sua compra foi finalizada com sucesso!</p>
          <button class="btn-comprar" @click="fechar">
            Voltar à loja
          </button>
        </div>
      </template>

    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  z-index: 9999;
  inset: 0;
  background: rgba(0,0,0,.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #1a1a24;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
  border-radius: 15px;
  position: relative;
}

.btn-fechar {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}

.titulo {
  color: white;
  margin-bottom: 8px;
}

.produto-item {
    margin: 5px;
    padding: 10px 20px;
    background-color: #ccc;
    border-radius: 8px;
    border-bottom: #22222e;
}

.produto-item p{
    color: #7c3aed;
    font-weight: bolder;
}

.produto-item p span{
    background-color: #7c3aed;
    color: #fff;
    font-weight: bolder;
    padding: 5px 7px;
    border-radius: 30px;
    margin: 0 7px 0 0;
}

.totall {
    font-size: 1.5vw;
    font-weight: bold;
    letter-spacing: 1.3px;
    margin: 15px;
    text-align: center;
}
.campo {
  margin-bottom: 10px;
}

.campo label {
  display: block;
  color: #ccc;
  margin-bottom: 4px;
}

.campo input {
  width: 100%;
  padding: 8px;
  border: 1px solid #444;
  border-radius: 8px;
  background: #22222e;
  color: white;
  box-sizing: border-box;
}

.btn-comprar {
  width: 100%;
  padding: 10px;
  background: #7c3aed;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.3vw;
}

.sucesso {
  text-align: center;
}

.icone-sucesso {
  font-size: 55px;
  color: #7c3aed;
}

.sucesso-msg {
  color: #ccc;
  margin: 0 0 15px 0;
}

.produto-item {
  color: white;
  margin-bottom: 8px;
}
</style>