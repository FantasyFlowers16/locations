import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index/Index.vue') },
      { name: 'category', path: '/category/:slug/', component: () => import('pages/category/Category.vue') },
      { name: 'categoryFilter', path: '/category/:slug/:slugCategory/', component: () => import('pages/category/Category.vue') }

    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
