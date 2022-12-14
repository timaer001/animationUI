import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/page/home')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/page/about')
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('@/page/icon')
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => import('@/page/axios')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('@/page/vuex')
    },
    {
      path: '/jq1',
      name: 'jq1',
      component: () => import('@/page/jq1')
    },
    {
      path: '/jq2',
      name: 'jq2',
      component: () => import('@/page/jq2')
    }
  ]
})
