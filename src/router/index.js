import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Telas/Home.vue';
// Importe outras telas conforme necessário

const routes = [
  { path: '/', component: Home },
  // Adicione outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
