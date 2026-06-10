import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/layout/HomeView.vue'
import CartPanel from '../components/cart/CartPanel.vue'
import ExplorePanel from '../components/ExplorePanel.vue'
import ProductView from '@/components/products/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cartPanel',
    name: 'cartPanel',
    component: CartPanel,
  },
  {
    path: '/explorePanel',
    name: 'explorePanel',
    component: ExplorePanel,
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: ProductView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
