import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BrandGuide from '@/views/BrandGuideCreator.vue'
import ErrorView from '@/views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/brandguide',
      name: 'brandguide',
      component: BrandGuide
    },
    {
      path: '/:catchAll(.*)',
      name: 'errorview',
      component: ErrorView
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
