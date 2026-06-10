<script setup>
// Componentizar a exibição de um produto individual em uma lista de produtos.

// MÍNIMO: Ele exibe as informações do produto, como nome, preço e imagem, e pode incluir um botão para adicionar o produto ao carrinho de compras.
// O componente é projetado para ser reutilizado em diferentes partes do aplicativo onde a exibição de produtos é necessária, como na página de listagem de produtos ou em recomendações de produtos relacionados.

// A MAIS: Como sugestão, não exiba todas as informações do Livro, deixando alguma div oculta e trabalhando o v-for ou v-if para exibir somente o nome e o preço, e ao clicar em um botão "Detalhes" ou "Ver mais", exiba as informações adicionais do produto, como descrição, autor e imagem. Isso pode ser feito usando uma propriedade de estado para controlar a visibilidade das informações adicionais.

import { formataPreco } from '@/utils/currencyUtils';
import ButtonAddCart from '../buttons/ButtonAddCart.vue';
import ButtonChild from '../buttons/ButtonChild.vue';
import ProductInfo from './ProductInfo.vue';
import { ref, inject } from 'vue';

const cartItems = inject('cartItems')
const mostrarInfo = ref(false);


defineProps(['id', 'nome', 'preco', 'imagem', 'categoria', 'estoque', 'marca', 'avaliacao', 'descricao', 'salvar', 'quant_avaliacao']);


function quant_prod_cart(id){
  return cartItems.value.find(i => i.id === id)?.quantity ?? 0
}

function add_cart(produto){
  const existe = cartItems.value.find(i => i.id === produto.id)
  if(existe){
    if(existe.quantity < produto.estoque) existe.quantity++
  } else {
    cartItems.value.push({...produto, quantity: 1})
  }
}


</script>


<template>
  <div class="produto-card-simple" >
    <div>
      <h2>{{ nome }}</h2>
      <div class="avaliacoes_fone">
          <div>
            <span v-for="n in 5" :key="n" class="estrela" :class="{ ativa: n <= avaliacao }">
            ★
          </span>
          </div>
          <p>{{ avaliacao }}</p>
        </div>
    </div>
    <img :src="imagem" :alt="nome" class="produto-image">
    <p class="formata">{{ formataPreco(preco) }}</p>
    <div class="abaixo">


    <ButtonAddCart
      class="add_cart"
      :produto="{ id, nome, preco, imagem, categoria, estoque, marca, avaliacao, descricao }"
      :quantos="quant_prod_cart(id)"
      @adicionar_cart="add_cart"
    />

    <ButtonChild class="save" @clique="mostrarInfo = true" >Veja mais</ButtonChild>
    <ProductInfo v-if="mostrarInfo" :nome="nome" :categoria="categoria" :marca="marca" :preco="preco" @fechar="mostrarInfo = false"></ProductInfo>

      </div>
  </div>
</template>


<style scoped>


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
}

.save {
    border-radius: 12px;
    padding: 0.5vw 1vw;
    border: none;
    background: #d9d9d9b7;
    color: #0d0d0f;
    font-weight: bolder;
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
</style>
