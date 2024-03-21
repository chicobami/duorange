import { createRouter, createWebHistory } from 'vue-router'
import TopView from '../components/pages/TopView.vue'
import LoginView from '../components/pages/LoginView.vue'
import MenuView from '../components/pages/MenuView.vue'
import PrologueView from '../components/pages/PrologueView.vue'
import Quest1View from '../components/pages/Quest1View.vue'
import Quest2View from '../components/pages/Quest2View.vue'

const routes = [
  {
    path: '/',
    name: 'top',
    component: TopView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/prologue',
    name: 'prologue',
    component: PrologueView
  },
  {
    path: '/quest1',
    name: 'quest1',
    component: Quest1View
  },
  {
    path: '/quest2',
    name: 'quest2',
    component: Quest2View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
