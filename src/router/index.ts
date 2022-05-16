import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import ProgrammingPage from '@/views/ProgrammingPage.vue';
import MusicPage from '@/views/MusicPage.vue';
import GamePage from '@/views/GamePage.vue';
import ContactPage from '@/views/ContactPage.vue';
import AboutPage from '@/views/AboutPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: () => HomePage
  },
  {
    path: '/Programming',
    component: () => ProgrammingPage
  },
  {
    path: '/Music',
    component: () => MusicPage
  },
  {
    path: '/Game',
    component: () => GamePage
  },
  {
    path: '/Contact',
    component: () => ContactPage
  },
  {
    path: '/About',
    component: () => AboutPage
  }

  // {
  //   path: '/folder/:id',
  //   component: () => import ('../views/FolderPage.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
