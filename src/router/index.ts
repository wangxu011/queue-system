import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/about',
        component: () => import('@/views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
