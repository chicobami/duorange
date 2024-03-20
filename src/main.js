import './assets/main.css'
import 'unfonts.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router';

import TopView from './components/pages/TopView.vue';
import PrologueView from './components/pages/PrologueView.vue';
import MenuView from './components/pages/MenuView.vue';
import Quest1View from './components/pages/Quest1View.vue';
import Quest2View from './components/pages/Quest2View.vue';
import LoginView from './components/pages/LoginView.vue';

const routes = [
  {
    path: '/', 
    component: TopView,
    name: 'top' 
  },
  {
    path: '/prologue', 
    component: PrologueView, 
    name: 'prologue'
  },
  {
    path: '/menu', 
    component: MenuView,
    name: 'menu' 
  },
  {
    path: '/quest1', 
    component: Quest1View,
    name: 'quest1' 
  },
  {
    path: '/quest2', 
    component: Quest2View,
    name: 'quest2' 
  },
  {
    path: '/login', 
    component: LoginView, 
    name: 'login'
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
