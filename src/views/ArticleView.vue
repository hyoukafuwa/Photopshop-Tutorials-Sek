<script setup>
import { ref, watch } from 'vue'
import { state } from '../state/state'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

import ArticleCard2 from '../components/ArticleCard2.vue'
import ArticleSection from '../components/ArticleSection.vue'

const route = useRoute()
const articleId = route.params.articleId

let otherArticles = ref([])

function getFittingArticles(id) {
  otherArticles.value = []
  for (let i = 0; i < 3; i++) {
    const stateArticles = state.articles.filter(article => article.id !== id)
    otherArticles.value.push(stateArticles[i])
  }
} 

getFittingArticles(articleId)

let mainArticle = ref(state.articles.filter(article => article.id === articleId)[0])

onBeforeRouteUpdate((to, from) => {
  mainArticle.value = state.articles.filter(article => article.id === to.params.articleId)[0]
  getFittingArticles(to.params.articleId)
})

</script>

<template>
  <div v-if="otherArticles !== []" class="article-view">
    <ArticleSection :article="mainArticle"/>
    <aside class="article-view__aside">
      <span class="article-view__aside__title">
        <h2>Andere Tutorials</h2>
      </span>
      <section class="article-view__aside__article-container">
        <ArticleCard2 v-for="article in otherArticles" :title="article.title" :date="article.date" :id="article.id"/>
      </section>
    </aside>
  </div>
  <span v-else>Loading...</span>

</template>

<style lang="scss" scoped>
@use '@/assets/base';

.article-view {
  display: flex;
  justify-content: space-evenly;
  margin-top: 60px;
  min-height: 100vh;
  width: 100%;

  &__aside {
    margin: 0 10px;

    &__title {
      display: block;
      margin-bottom: 10px;
    }

    &__article-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}

@media (max-width: 1400px) {
  .article-view {
    flex-direction: column;
    align-items: center;

    &__aside {
      width: 100%;
      min-width: 450px;
      display: flex;
      flex-direction: column;
      margin: 40px 0;

      &__title {
        align-self: center;
        margin-bottom: 20px;
      }

      &__article-container {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, 450px);
      }
    }
  }
}

</style>