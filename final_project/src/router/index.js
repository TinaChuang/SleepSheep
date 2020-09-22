import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/frontend/Index.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/frontend/About.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        // 動態路由
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/frontend/Cart.vue')
      },
      {
        path: '/cart-message',
        name: 'CartStep2',
        component: () => import('../views/frontend/CartStep2.vue')
      },
      {
        path: '/cart-check/:orderId',
        name: 'CartStep3',
        component: () => import('../views/frontend/CartStep3.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'backendProducts',
        component: () => import('@/views/backend/Products.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('@/views/backend/Coupons.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/backend/Orders.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
