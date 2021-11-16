import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import MyCarByCode from '@/views/MyCarCode.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }, 
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/my-car/:code',
    name: 'My Car',
    component: MyCarByCode
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
