import { createRouter, createWebHistory } from 'vue-router'

import Receitas from '../components/Receitas.vue'

const routes = [
  { path: '/', component: Receitas },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router