import { createRouter, createWebHistory } from 'vue-router'
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
      path: '/planets',
      name: 'planets',
      component: () => import('../views/PlanetsView.vue')
    },
    {
      path: '/planet/:name',
      name: 'planet',
      component: () => import('../views/PlanetView.vue'),
      props: true,
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('../views/QuestionsView.vue')
    }
  ]
})

export default router
