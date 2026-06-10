<script setup>
</script>

<template>
    <footer>
        <div class="container">
            <p>&copy; 2026 Vacwm. Alguns direitos reservados.</p>
        <a href="/src/views/HomeView.vue" target="_blank">
            <img src="/src/assets/logo.svg" alt="Logo" />
        </a>
        </div>
    </footer>
</template>

<style scoped>
footer {
  background-color: #0d0d0f;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1rem 2rem;
  border-top: 3px solid #d9d9d9b7;
  box-sizing: border-box;
  align-items: center;
}

.container p{
    color: #706C6C;
    font-family: 'Oxanium', sans-serif;
    font-weight: bold;
}

.container {
    justify-content: space-between;
    align-items: center;
}

a{
    text-decoration: none;
    color:#D9D9D9;
}
</style>
