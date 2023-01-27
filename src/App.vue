<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { auth } from './firebase'
import { onAuthStateChanged } from '@firebase/auth'

import Header from './components/Header.vue'
import AuthModal from './components/AuthModal.vue'
import Footer from './components/Footer.vue'

const showAuthModal = ref(false)
const isLoggedIn = ref(false)

// functionality of hiding or showing the scroll bar when the auth modal is active
function hideOrShowAuthModal() {
  showAuthModal.value = !showAuthModal.value;
  document.body.style.overflow = 'auto'
  if (showAuthModal.value) document.body.style.overflow = 'hidden'
}

function search() {

}

// check if user is logged in when reloading website
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
    @openAuthModal="hideOrShowAuthModal"
    @signedOut="isLoggedIn = false"
    @searchExecuted="search"
  />
  <!-- <SearchBar v-if="showSearchBar"/> -->
  <AuthModal
    v-if="showAuthModal"
    @closeModal="hideOrShowAuthModal"
  />
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