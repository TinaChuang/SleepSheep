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
        component: () => import(/* webpackChunkName: "about" */ '../views/frontend/Index.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/frontend/About.vue')
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
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/backend/Coupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/backend/Orders.vue')
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
