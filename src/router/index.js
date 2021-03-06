import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
Vue.use(VueRouter)

const routes = [{
  path: '/login',
  component: () => import('@/views/Login')
},
{
  path: '/',
  component: Layout,
  redirect: '/home',
  children: [{
    path: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: 'video',
    component: () => import('@/views/Video')
  },
  {
    path: 'question',
    component: () => import('@/views/Question')
  },
  {
    path: 'my',
    component: () => import('@/views/My')
  }]
},
{
  path: '/search',
  component: () => import('@/views/Search')
},
{
  path: '/article/:article_id',
  component: () => import('@/views/Article'),
  name: 'article',
  props: true
}
]

const router = new VueRouter({
  routes
})

export default router
