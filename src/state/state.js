import { reactive } from 'vue'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { db, auth } from '../firebase'

import createDateString from '../utils/createDateString'
import getYouTubeID from 'get-youtube-id'

export const state = reactive({
  user: {},
  isLoggedIn: false,
  articles: [],
  authErrorMessage: ''
})

export const methods = {
  async signIn(email, password) {
    // check if field is empty
    if (!email || !password) {
      alert('Das Feld darf nicht leer sein')
      return
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        state.user = userCredential.user
        state.isLoggedIn = true
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
           alert('falsche E-Mail')
            break;
          case 'auth/user-not-found':
           alert('kein Konto mit dieser E-Mail wurde gefunden')
            break;
          case 'auth/wrong-password':
           alert('falsches Passwort')
            break
          default:
           alert('E-Mail oder Passwort ist falsch')
            break
        }
      })
  },
  signOut() {
    signOut(auth).then(() => {
      state.isLoggedIn = false
    })
  },
  checkUserState() {
    onAuthStateChanged(auth, user => {
      if (!user) return
      state.isLoggedIn = true
    })
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
        description: article.description
      })
    })
  },
  async addArticles(title, youTubeUrl, description) {
    // check if provided youtube url exists and get its id
    const youTubeId = getYouTubeID(youTubeUrl)
    if (youTubeId == null) alert('die angegebene YouTube-URL ist falsch')
    if (!confirm('Hiermit bestätigen Sie, dass Sie diesen Artikel in dieser Form abschicken')) return

    await addDoc(collection(db, 'tutorials'), {
      title: title,
      date: new Date().getTime(),
      youTubeUrl: youTubeId,
      description: description
    })
  }
}
