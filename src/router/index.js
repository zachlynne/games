import { createRouter, createWebHistory } from 'vue-router'
import ChessView from '../views/ChessView.vue'
import ConnectFourView from '../views/ConnectFourView.vue'
import CheckersView from '../views/CheckersView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/connect-four',
      name: 'connect-four',
      component: ConnectFourView
    },
    {
      path: '/checkers',
      name: 'checkers',
      component: CheckersView
    },
    {
      path: '/chess',
      name: 'chess',
      component: ChessView
    }
  ]
})

export default router
