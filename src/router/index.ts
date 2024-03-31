import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import About from '../views/about/AboutView.vue'
import Login from '../views/home/login/Login.vue'
import Price from '@/views/about/price/Price.vue'
import List from '@/views/about/price/list/List.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/login',
          name: 'login',
         component:Login
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component:About,
      children: [
        {
          path: '/price',
          name: 'price',
         component:Price,
         children: [
          {
            path: '/list',
            name: 'list',
           component:List
          }
        ]
        }
      ]
    }
  ]
})
router.beforeEach((to, from) => {
    const token = localStorage.getItem('token')
    if(to.path !== '/login'){
      if (!token) {
        return '/login'
      }
      return
    }
    return
})
export default router
