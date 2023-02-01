import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

import MainView from '../views/MainView.vue'
import AddPostView from '../views/AddPostView.vue'
import ArticleView from '../views/ArticleView.vue'
import ErrorPageView from '../views/ErrorPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainView,
      children: [
       {
        path: '/:articleId',
        name: 'Article',
        component: ArticleView,
        props: true
       }
      ]
    },
    {
      path: '/add-post',
      name: 'AddPost',
      component: AddPostView,
      beforeEnter: (to, from, next) => {
        // if the user is not logged in, he shall be sent back to the front page
        onAuthStateChanged(auth, user => {
          if (user) next()
          else return { path: '/' }
        })
      }
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'ErrorPage', 
      component: ErrorPageView 
    },
  ]
})

export default router
