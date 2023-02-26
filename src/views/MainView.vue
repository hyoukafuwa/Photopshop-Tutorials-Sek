<script setup>
import { ref } from 'vue'

import ArticleCard1 from '../components/ArticleCard1.vue'
import { state } from '../state/state'

const articles = ref(state.articles)

</script>

<template>
  <main class="main">
    <span v-if="!articles.length">Loading..</span>
    <ArticleCard1 v-else v-for="article in articles" :title="article.title" :date="article.date" :id="article.id" :youTubeUrl="article.youTubeUrl"/>
  </main>
</template>

<style lang="scss">
@use '@/assets/base';

.main {
  min-height: 100vh;
  margin: 20px 0;
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(410px, 1fr));
  grid-template-columns: repeat(auto-fill, 1fr);
  justify-content: center;
  padding: 20px;
}

@media (max-width: 1536px) {
  .main {
    grid-template-columns: repeat(auto-fill, minmax(410px, 1fr));
  }  
}

</style>