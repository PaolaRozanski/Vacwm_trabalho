<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <nav class="container">
            <h1><RouterLink to="/"><img src="/src/assets/logo.svg" alt="Logo"></RouterLink></h1>
            <div class="pages">
                <RouterLink to="/">Início</RouterLink>
                <RouterLink to="/explorePanel">Explorar</RouterLink>
                <RouterLink to="/cartPanel">Carrinho</RouterLink>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    .container {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2vw;
        padding: 1rem 2rem;
    }
    .pages {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    header {
        background-color: black;

        top: 0; left: 0;
        width: 100%;
        z-index: 100;
        padding: 16px;
        border-bottom: 3px solid #d9d9d9b7;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color:#D9D9D9;
    }
    .pages .router-link-active{
        color: #000000;
        font-weight: bolder;
        border:#D9D9D9 2px solid;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        background-color: #D9D9D9;
    }
</style>

