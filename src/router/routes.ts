import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index/Index.vue') },
      { path: '/category/:slug/', component: () => import('pages/Category.vue') }

    ]
  }
]

export default routes
