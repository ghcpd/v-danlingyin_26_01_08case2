import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import Guide from '@/pages/Guide.vue'
import Api from '@/pages/Api.vue'
import About from '@/pages/About.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/guide',
    name: 'guide',
    component: Guide
  },
  {
    path: '/api',
    name: 'api',
    component: Api
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
