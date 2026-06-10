<script setup>
import { computed } from 'vue'
import { produtos } from '@/data/products'
import ProductCards from '@/components/products/ProductCards.vue'

const destaques = computed(() =>
  [...produtos]
    .sort((a, b) => b.avaliacao - a.avaliacao)
    .slice(0, 4)
)
</script>

<template>
  <div class="home">
    <section class="banner">
      <div class="texto">
        <p class="subtitulo">Os melhores fones para</p>
        <h1 class="titulo">
          Sentir cada<br />
          <span class="destaque">batida</span>
        </h1>
        <p class="descricao">e viver a música.</p>
        <button class="botao">Ver produtos</button>
      </div>
      <div class="imagem">
        <img
          src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80"
          alt="Fone premium"
          class="foto"
        />
      </div>
    </section>
    <section class="beneficios">
      <div class="beneficio">
        <span class="icone">🚚</span>
        <div>
          <strong>Frete grátis</strong>
          <p>Em compras acima de R$ 180</p>
        </div>
      </div>
      <div class="beneficio">
        <span class="icone">💳</span>
        <div>
          <strong>Até 12x sem juros</strong>
          <p>No cartão de crédito</p>
        </div>
      </div>
      <div class="beneficio">
        <span class="icone">🛡️</span>
        <div>
          <strong>Garantia de qualidade</strong>
          <p>7 dias para devolução</p>
        </div>
      </div>
      <div class="beneficio">
        <span class="icone">⚡</span>
        <div>
          <strong>Suporte rápido</strong>
          <p>Atendimento humanizado</p>
        </div>
      </div>
    </section>

    <!-- PRODUTOS EM DESTAQUE -->
    <section class="destaques">
      <div class="destaques__header">
        <h2 class="destaques__titulo">Produtos em destaque</h2>
      </div>
      <div class="destaques__grid">
        <ProductCards
          v-for="produto in destaques"
          :key="produto.id"
          v-bind="produto"
        />
      </div>
    </section>

  </div>
</template>

<style scoped>
.home {
  background: #0f0f13;
  color: #f0eefb;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

/* ── BANNER ── */
.banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  padding: 4rem 3rem;
  background: #1a237e;
}
.subtitulo {
  color: #9692b0;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}
.titulo {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: #fff;
}
.destaque {
  color: #a78bfa;
  font-style: italic;
}
.descricao {
  color: #9692b0;
  margin: 0.5rem 0 2rem;
}
.botao {
  background: #7c3aed;
  color: #fff;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.botao:hover {
  background: #6d28d9;
}
.imagem {
  display: flex;
  justify-content: center;
}
.foto {
  width: 100%;
  max-width: 360px;
  border-radius: 20px;
  object-fit: cover;
  aspect-ratio: 4/3;
}

/* ── BENEFÍCIOS ── */
.beneficios {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(78, 61, 107, 0.2);
  border-top: 1px solid rgba(78, 61, 107, 0.2);
  border-bottom: 1px solid rgba(78, 61, 107, 0.2);
}
.beneficio {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  background: #0f0f13;
  font-size: 0.82rem;
}
.icone {
  font-size: 1.4rem;
  flex-shrink: 0;
}
.beneficio strong {
  display: block;
  color: #f0eefb;
  font-size: 0.88rem;
}
.beneficio p {
  color: #9692b0;
  margin: 0;
}

/* ── DESTAQUES ── */
.destaques {
  padding: 3rem;
}
.destaques__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.destaques__titulo {
  font-size: 1.3rem;
  font-weight: 700;
}
.destaques__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}


</style>
