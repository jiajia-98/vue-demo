import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Child from './child'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/firstpage'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: Child
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router