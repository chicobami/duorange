import { createRouter, createWebHistory } from 'vue-router'
import TopView from '../components/pages/TopView.vue'
import LoginView from '../components/pages/LoginView.vue'
import MenuView from '../components/pages/MenuView.vue'
import PrologueView from '../components/pages/PrologueView.vue'
import Quest1View from '../components/pages/Quest1View.vue'
import Quest2View from '../components/pages/Quest2View.vue'
import FishingView from '../components/pages/FishingView.vue'
import Quest1LoginView from '../components/pages/Quest1LoginView.vue'
import Quest1ClearView from '../components/pages/Quest1ClearView.vue'

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
    path: '/quest1/login',
    name: 'quest1Login',
    component: Quest1LoginView
  },
  {
    path: '/quest1/clear',
    name: 'quest1Clear',
    component: Quest1ClearView
  },
  {
    path: '/quest2',
    name: 'quest2',
    component: Quest2View
  },
  {
    path: '/fishing',
    name: 'fishing',
    component: FishingView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
