import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import ProductView from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeView },
    { path: '/catalog', component: CatalogView },
    { path: '/catalog/product/:id', component: ProductView, props: true },
    { path: '/cart', component: CartView },
  ],
})

export default router
