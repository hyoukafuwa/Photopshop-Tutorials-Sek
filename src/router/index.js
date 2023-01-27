import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AddPostView from '../views/AddPostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/add-post',
      name: 'add-post',
      component: AddPostView
    }
  ]
})

export default router
