import { createRouter, createWebHistory } from 'vue-router'

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
      path: '/add-post',
      name: 'AddPost',
      component: AddPostView
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: ArticleView,
      // beforeEnter: async (to, from, next) => {
      //   const articleId = to.params.id
      //   console.log(articleId)
      //   const docSnap = await getDoc(doc(db, 'tutorials', articleId))
      //   if (docSnap) return next()
      //   next({ name: 'NotFound' })
      // }
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFoundView 
    },
  ]
})

export default router
