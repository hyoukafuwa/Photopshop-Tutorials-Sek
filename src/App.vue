<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'

const showSearchBar = ref(false)
</script>

<template>
  <Header @showOrHideSearchBar="showSearchBar = !showSearchBar"/>
  <SearchBar v-if="showSearchBar"/>
  <RouterView></RouterView>
</template>
