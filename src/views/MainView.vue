<script setup>
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore' 
import { ref, onMounted } from 'vue'

import createDateString from '../utils/createDateString'
import Article from '../components/Article.vue'

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'tutorials'))
  querySnapshot.forEach(doc => {
    const articleDate = new Date(
      doc.data().date.year, 
      doc.data().date.month, 
      doc.data().date.year
    )

    articles.value.push({
      id: doc.id,
      title: doc.data().title,
      date: createDateString(articleDate)
    })
  })
})

const articles = ref([])
</script>

<template>
  <main class="main">
    <span v-if="!articles.length">Loading..</span>
    <Article v-else v-for="article in articles" :title="article.title" :date="article.date" :id="article.id"/>
  </main>
</template>

<style lang="scss">
@use '@/assets/base';

.main {
  min-height: 100vh;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 20px;
}

</style>