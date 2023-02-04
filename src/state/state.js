import { reactive, readonly } from 'vue'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase'

import createDateString from '../utils/createDateString'

export const state = reactive({
  isLoggedIn: false,
  articles: [],
})

export const methods = {
  loginUser() {

  },
  async fetchArticles() {
    const querySnapshot = await getDocs(collection(db, 'tutorials'))
    querySnapshot.forEach(doc => {
      const article = doc.data()
      const articleDate = new Date(article.date)

      state.articles.push({
        id: doc.id,
        title: article.title,
        date: createDateString(articleDate),
      })
    })
  }
}

export const getters = {
  isUserLoggedIn() {
    return state.isUserLoggedIn
  },
  getArticles() {
    return state.articles
  }
}
