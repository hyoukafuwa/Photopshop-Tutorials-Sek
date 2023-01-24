<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { auth } from './firebase'
import { onAuthStateChanged } from '@firebase/auth'

import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import AuthModal from './components/AuthModal.vue'
import Footer from './components/Footer.vue'

const showSearchBar = ref(false)
const showAuthModal = ref(false)
const isLoggedIn = ref(false)

// functionality of hiding or showing the scroll bar when the auth modal is active
function hideOrShowAuthModal() {
  showAuthModal.value = !showAuthModal.value;
  document.body.style.overflow = 'auto'
  if (showAuthModal.value) document.body.style.overflow = 'hidden'
}

onMounted(() => {
  onAuthStateChanged(auth, user => {
    if (!user) return
    isLoggedIn.value = true
  })
})

</script>

<template>
  <Header 
    :isLoggedIn="isLoggedIn" 
    @showOrHideSearchBar="showSearchBar = !showSearchBar" 
    @openAuthModal="hideOrShowAuthModal"
    @signedOut="isLoggedIn = false"
  />
  <AuthModal 
    v-if="showAuthModal" 
    @closeModal="hideOrShowAuthModal"
  />
  <SearchBar v-if="showSearchBar"/>
  <RouterView></RouterView>
  <Footer/>
</template>

<style lang="scss">
@use '@/assets/base';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: base.$font;
}

</style>