import { createRouter, createWebHistory } from 'vue-router'

import siteLayout from '../layouts/siteLayout.vue'
import Receita from '../components/Receita.vue'
import Receitas from '../components/Receitas.vue'
import Categorias from '../components/Categorias.vue';

const routes = [
  {
    path: '/',
    component: siteLayout,
    redirect: '/receitas',
    children: [
      {
        path: '/receitas',
        name: "receitas",
        component: Receitas
      },
      {
        path: '/receita/:category/:name',
        name: "Receita",
        component: Receita
      },
      {
        path: '/categorias/:name',
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