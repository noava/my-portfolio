import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import BrandGuide from '@/views/BrandGuideCreator.vue'
import Scene3d from '@/views/3d-Scene.vue'
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
      path: '/3d-scene',
      name: '3d-scene',
      component: Scene3d
    },
    {
      path: '/:catchAll(.*)',
      name: 'errorview',
      component: ErrorView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.path === '/projects') {
      return new Promise((resolve) => {
        // Wait for the DOM to render
        setTimeout(() => {
          resolve({
            el: '#projects',
            behavior: 'smooth',
            top: 70 // Adjust as needed
          })
        }, 100) // Adjust delay time if necessary
      })
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
