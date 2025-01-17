import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import BrandGuide from '@/views/BrandGuideCreator.vue'
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
      path: '/projects',
      name: 'projects',
      component: HomeView
    },
    /*{
      path: '/brandguide',
      name: 'brandguide',
      component: BrandGuide
    },*/
    {
      path: '/:catchAll(.*)',
      name: 'errorview',
      component: ErrorView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.path === '/projects') {
      return {
        el: '#projects',
        behavior: 'smooth',
        top: 70
      }
    }
    if (to.hash === '#contact' || from.hash === '#contact') {
      return { savedPosition }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
