<script setup>
import { RouterView, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { methods } from './state/state'

import Header from './components/Header.vue'
import AuthModal from './components/AuthModal.vue'
import Footer from './components/Footer.vue'

const showAuthModal = ref(false)
const isLoggedIn = ref(false)
const router = useRouter()

// functionality of hiding or showing the scroll bar when the auth modal is active
function hideOrShowAuthModal() {
  showAuthModal.value = !showAuthModal.value;
  document.body.style.overflow = 'auto'
  if (showAuthModal.value) document.body.style.overflow = 'hidden'
}

function handleSignOut() {
  isLoggedIn.value = false
  router.push('/')
}

function search() {

}

// check if user is logged in when loading website
onMounted(() => {
  methods.checkUserState()
  methods.fetchArticles()
})

</script>

<template>
  <Header
    :isLoggedIn="isLoggedIn"
    @openAuthModal="hideOrShowAuthModal"
    @signedOut="handleSignOut"
    @searchExecuted="search"
  />
  <AuthModal v-if="showAuthModal" @closeModal="hideOrShowAuthModal"/>
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