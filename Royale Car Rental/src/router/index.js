import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/index')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../components/service')
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import('../components/aboutus')
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: () => import('../components/contactus')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/client')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router