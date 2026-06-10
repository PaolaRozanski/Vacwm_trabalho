<script setup>
defineProps(['id', 'nome', 'preco', 'imagem', 'categoria', 'estoque', 'marca', 'avaliacao', 'descricao', 'salvar', 'quant_avaliacao']);

import { formataPreco } from '@/utils/currencyUtils';
import ButtonChild from '../buttons/ButtonChild.vue';

const emit = defineEmits(['fechar']);

</script>

<template>
    <div class="info">
        <div class="see_more">
    <div>
      <h2>{{ nome }}</h2>
      <h3>{{ categoria }} - {{ marca }}</h3>
      <p>{{ descricao }}</p>
      <div class="avaliacoes_fone">
          <div>
            <span v-for="n in 5" :key="n" class="estrela" :class="{ ativa: n <= avaliacao }">
            ★
          </span>
          </div>
          <p>{{ avaliacao }}</p>
          <p>({{ quant_avaliacao }} avaliações)</p>
        </div>
    </div>
    <img :src="imagem" :alt="nome" class="produto-image">
    <p>({{ estoque }} unidades em estoque)</p>


        <p class="formata">{{ formataPreco(preco) }}</p>

    <div class="btn" >
    <ButtonChild class="add_cart" @clique="adicionar" >Add Carrinho</ButtonChild>
    <ButtonChild class="save">Salvar</ButtonChild>
    </div>

      <ButtonChild class="exit" @clique="emit('fechar')">Fechar</ButtonChild>
  </div>
    </div>



</template>

<style scoped>
.btn {

  display: flex;
  justify-content: baseline;
  gap: 2vw;
}
h3 {
  color: #D9D9D9;
  font-weight: bold;
}

p {
    color: #D9D9D9;
  }

.produto-card-simple {
  border: 2px solid #d9d9d9b7;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
}

.produto-image {
  max-width: 200px;
  height: auto;
}

.estrela {
  color: #d9d9d9b7;
  font-size: 20px;
}

.estrela.ativa {
  color: #ffea75;
  font-size: 22px;
}

.avaliacoes_fone {
    justify-content: baseline;
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}

.add_cart {
    border-radius: 12px;
    padding: 0.5vw 1vw;
    border: none;
    background: #ffea75;
    color: #0d0d0f;
    font-weight: bolder;
    font-size: 1.2vw;
    cursor: pointer;
}

.save {
    border-radius: 12px;
    padding: 0.5vw 1vw;
    border: none;
    background: #d9d9d9b7;
    color: #0d0d0f;
    font-weight: bolder;
    font-size: 1.2vw;
    cursor: pointer;
}

.exit {
  cursor: pointer;
  position: absolute;
  bottom: 2vw; /* Distância do fundo do modal */
  right: 4vw;
  border-radius: 100px;
  padding: 0.5vw 1vw;
  border: none;
  background: #ee4f4fb7;
  color: #d9d9d9;
  font-weight: bold;
  font-size: 1.2vw;
}

h2 {
    font-size: 2vw;
    font-weight: bolder;
    color: #D9D9D9;
    font-family: 'Oxanium', sans-serif;
}

.abaixo {
  justify-content: baseline;
  display: flex;
  align-items: center;
  gap: 3vw;
  flex-wrap: wrap;
}

.formata {
    font-size: 2vw;
    color: #D9D9D9;
    font-weight: bolder;
    font-family: 'Oxanium', sans-serif;
}

.see_more {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%; height: 70%;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    border-radius: 15px;
    background-color: #0d0d0f;
    min-width: 320px;
    padding: 2vw 4vw;
}

</style>
