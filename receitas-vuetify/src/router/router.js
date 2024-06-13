import { createRouter, createWebHistory } from 'vue-router'

import siteLayout from '../layouts/siteLayout.vue'
import Doce from '../components/Doce.vue'
import Receitas from '../components/Receitas.vue'
import Categorias from '../components/Categorias.vue';

const routes = [
  {
    path: '/',
    component: siteLayout,
    children: [
      {
        path: '/receitas',
        name: "receitas",
        component: Receitas
      },
      {
        path: '/doce',
        name: "doce",
        component: Doce
      },
      {
        path: '/categorias',
        name: "categorias",
        component: Categorias
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router