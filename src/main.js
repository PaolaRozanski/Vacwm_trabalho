import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fontsource/oxanium/500.css'
import '@fontsource/oxanium'

const app = createApp(App)

app.use(router)

app.mount('#app')
