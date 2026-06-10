<script setup>
import { ref } from 'vue'
import { formataPreco } from '@/utils/currencyUtils'

const props = defineProps(['nome', 'preco', 'categoria', 'id'])
const emit = defineEmits(['fechar'])

const nomeCliente = ref('')
const telefoneCliente = ref('')
const enderecoCliente = ref('')
const etapa = ref('formulario') // 'formulario' ou 'sucesso'

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

      <!-- ETAPA: Formulário -->
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
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal {
  background: #1a1a24;
  border: 1px solid rgba(124, 58, 237, 0.35);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 420px;
  position: relative;
  box-shadow: 0 0 40px rgba(124, 58, 237, 0.2);
  animation: entrar 0.2s ease;
}

@keyframes entrar {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

.btn-fechar {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #9692b0;
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 0.2s;
}
.btn-fechar:hover { color: #fff; }

.titulo {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 1rem;
}

.produto-info {
  background: #22222e;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  margin-bottom: 1.2rem;
}

.categoria {
  font-size: 0.7rem;
  color: #a78bfa;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.produto-nome {
  color: #fff;
  font-weight: 600;
  margin: 0.2rem 0 0.2rem;
}

.produto-preco {
  color: #a78bfa;
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
}

.divider {
  border-top: 1px solid rgba(124, 58, 237, 0.2);
  margin-bottom: 1.2rem;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.9rem;
}

.campo label {
  color: #9692b0;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.campo input {
  background: #22222e;
  border: 1px solid rgba(124, 58, 237, 0.25);
  border-radius: 10px;
  padding: 0.65rem 0.9rem;
  color: #fff;
  font-size: 0.95rem;
  outline: none;
  transition: border 0.2s;
}

.campo input:focus {
  border-color: #7c3aed;
}

.campo input::placeholder {
  color: #4a4763;
}

.btn-comprar {
  width: 100%;
  margin-top: 0.5rem;
  background: #7c3aed;
  color: #fff;
  border: none;
  padding: 0.85rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-comprar:hover { background: #6d28d9; }

/* Sucesso */
.sucesso {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.8rem;
  padding: 0.5rem 0;
}

.icone-sucesso {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #fff;
  font-weight: 900;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
}

.sucesso-msg {
  color: #c4c0d8;
  margin: 0;
}

.sucesso-detalhe {
  color: #9692b0;
  font-size: 0.88rem;
  margin: 0;
  line-height: 1.5;
}

.detalhe-txt {
  color: #a78bfa;
  font-weight: 600;
}
</style>
