import Vue from 'vue'
import VueRouter from 'vue-router'
import Sign from '../views/SignUp.vue'
import Login from '../views/Login.vue'

import App from 'C:/Users/陈乐e/Desktop/vue/117/src/App.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/sign',
    name: 'sign',
    component: Sign
  },
]

const router = new VueRouter({
  routes
})


export default router
