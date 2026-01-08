import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import GuidePage from '@/pages/GuidePage.vue'
import ApiPage from '@/pages/ApiPage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Vue 3 - The Progressive JavaScript Framework'
    }
  },
  {
    path: '/guide',
    name: 'Guide',
    component: GuidePage,
    meta: {
      title: 'Guide | Vue 3'
    }
  },
  {
    path: '/api',
    name: 'API',
    component: ApiPage,
    meta: {
      title: 'API Reference | Vue 3'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'About | Vue 3'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Update document title on route change
router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  if (title) {
    document.title = title
  }
})

export default router
