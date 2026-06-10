<script setup>
import { ref } from 'vue'
import { formataPreco } from '@/utils/currencyUtils'

const props = defineProps(['nome', 'preco', 'categoria', 'id'])
const emit = defineEmits(['fechar'])

const nomeCliente = ref('')
const telefoneCliente = ref('')
const enderecoCliente = ref('')
const etapa = ref('formulario')

function finalizar() {
  if (!nomeCliente.value.trim() || !telefoneCliente.value.trim() || !enderecoCliente.value.trim()) {
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

        <div class="produto-info">
          <span class="categoria">{{ props.categoria }}</span>
          <p class="produto-nome">{{ props.nome }}</p>
          <p class="produto-preco">{{ formataPreco(props.preco) }}</p>
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
          <p class="sucesso-detalhe">
            <strong>{{ props.nome }}</strong> será enviado para:<br />
            <span class="detalhe-txt">{{ enderecoCliente }}</span>
          </p>
          <p class="sucesso-detalhe">
            Entraremos em contato pelo telefone:<br />
            <span class="detalhe-txt">{{ telefoneCliente }}</span>
          </p>
          <button class="btn-comprar" @click="fechar">Voltar à loja</button>
        </div>
      </template>

    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #1a1a24;
  width: 90%;
  max-width: 400px;
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
  margin-bottom: 15px;
}

.produto-info {
  background: #22222e;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.categoria {
  color: #a78bfa;
  font-size: 12px;
}

.produto-nome {
  color: white;
  margin: 5px 0;
}

.produto-preco {
  color: #a78bfa;
  font-weight: bold;
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

}

.sucesso {
  text-align: center;
}

.icone-sucesso {
  font-size: 40px;
  color: #7c3aed;
}

.sucesso-msg,
.sucesso-detalhe {
  color: #ccc;
}

.detalhe-txt {
  color: #a78bfa;
}
</style>
