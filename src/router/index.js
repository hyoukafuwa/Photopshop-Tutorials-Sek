import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

import MainView from '../views/MainView.vue'
import AddPostView from '../views/AddPostView.vue'
import ArticleView from '../views/ArticleView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainView,
    },
    {
      path: '/:articleId',
      name: 'Article',
      component: ArticleView,
      beforeEnter: async (to, from) => {
        const articleId = to.params.articleId
        const docRef = doc(db, 'tutorials', articleId)
        const docSnap = await getDoc(docRef)
      
        if (!docSnap.exists()) return {
          name: 'NotFound',
          // Match the path of your current page and keep the same url...
          params: { pathMatch: to.path.split('/').slice(1) },
          // ...and the same query and hash.
          query: to.query,
          hash: to.hash,
        }
      }
    },
    {
      path: '/add-post',
      name: 'AddPost',
      component: AddPostView,
      beforeEnter: (to, from, next) => {
        // if the user is not logged in, he shall be sent back to the front page
        onAuthStateChanged(auth, user => {
          if (user) next()
          else return { name: 'Main' }
        })
      }
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFoundView 
    },
  ]
})

export default router
