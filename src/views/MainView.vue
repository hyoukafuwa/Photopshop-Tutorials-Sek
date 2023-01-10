<script setup>
import { ref } from 'vue'
import Article from '../components/Article.vue'

const articles = ref([
  {
    title: 'Tutorial 1',
    date: '12.12.1212'
  },
  {
    title: 'Tutorial 2',
    date: '13.13.1313'
  },
  {
    title: 'Tutorial 3',
    date: '14.14.1414'
  }, 
  {
    title: 'Tutorial 4',
    date: '14.14.1414'
  }
])
</script>

<template>
  <main class="main">
    <Article v-for="article in articles" :title="article.title" :date="article.date"></Article>
  </main>
</template>

<style lang="scss">
@use '@/assets/base';

.main {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 20px;
}

</style>