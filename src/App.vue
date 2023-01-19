<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'

import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import AuthModal from './components/AuthModal.vue'
import Footer from './components/Footer.vue'

const showSearchBar = ref(false)
const showAuthModal = ref(false)

// functionality of hiding or showing the scroll bar when the auth modal is active
function hideOrShowAuthModal() {
  showAuthModal.value = !showAuthModal.value;
  document.body.style.overflow = 'auto'
  if (showAuthModal.value) document.body.style.overflow = 'hidden'
}

</script>

<template>
  <Header @showOrHideSearchBar="showSearchBar = !showSearchBar" @openAuthModal="hideOrShowAuthModal()"/>
  <AuthModal @closeModal="hideOrShowAuthModal()" v-if="showAuthModal"/>
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