<script setup>
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore' 
import { ref, onMounted } from 'vue'

import createDateString from '../utils/createDateString'
import ArticleCard1 from '../components/ArticleCard1.vue'

const articles = ref([])

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'tutorials'))
  querySnapshot.forEach(doc => {
    const article = doc.data()
    const articleDate = new Date(article.date)

    articles.value.push({
      id: doc.id,
      title: article.title,
      date: createDateString(articleDate),
    })
  })
})

</script>

<template>
  <main class="main">
    <span v-if="!articles.length">Loading..</span>
    <ArticleCard1 v-else v-for="article in articles" :title="article.title" :date="article.date" :id="article.id"/>
  </main>
</template>

<style lang="scss">
@use '@/assets/base';

.main {
  min-height: 100vh;
  margin: 20px 0;
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 450px);
  justify-content: center;
}

@media (max-width: 1450px) {
  .main {
    grid-template-columns: repeat(auto-fill, 450px);
  }  
}

</style>