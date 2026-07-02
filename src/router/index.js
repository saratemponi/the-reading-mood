import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MoodView from '../views/MoodView.vue'
import ResultView from '../views/ResultView.vue'
import ArchiveView from '../views/ArchiveView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/mood/:id', component: MoodView },
  { path: '/result', component: ResultView },
  { path: '/archive', component: ArchiveView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router