import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/login/Login.vue')
  },
  {
    path: '/validation',
    name: 'validation',
    component: () => import('../components/validation/validation.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
