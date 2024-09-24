import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Importa o roteador
import './assets/css/tailwind.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
