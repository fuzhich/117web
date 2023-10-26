import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Form from '../views/Form.vue'
import App from 'C:/Users/陈乐e/Desktop/vue/117/src/App.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/hom',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
