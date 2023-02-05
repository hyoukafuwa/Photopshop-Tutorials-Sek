<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { state } from '../state/state'

const route = useRoute()
const articleId = route.params.articleId

// get the one article form the array that has the site params's id
const article = ref(state.articles.filter(article => article.id === articleId)[0])
console.log(article.value)

</script>

<template>
  <main v-if="article" class="article-section">
    <h1 class="article-section__title">
      {{ article.title }}
    </h1>
    <span class="article-section__date">
      {{ article.date }}
    </span>
    <section class="article-section__video">
      <iframe src="https://www.youtube.com/embed/5N_fTRZuTkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
    <button class="article-section__button" v-if="state.isLoggedIn">
      Delete
    </button>
    <section class="article-section__description">
      <p class="article-section__article__description__paragraph">
        {{ article.description }}
      </p>
    </section>
  </main>
</template>

<style lang="scss">
@use '@/assets/base';

.article-section {
  max-width: 900px;
  height: 800px;
  // min-width: 600px;
  @include base.box-shadow;
  // display: flex;
  // flex-direction: column;
  display: grid;
  grid-template-columns: 50px repeat(2, 4fr) 50px;
  grid-template-rows: 80px minmax(300px, 500px) 40px minmax(60px, 200px);

  &__video {
    grid-column: 2 / 4;
    // grid-row-end: 1;
    // justify-self: center;
    display: flex;
    align-items: center;

    iframe {
      // width: 500px;
      // height: 300px;
      width: 100%;
      height: 90%;
    }
  }

  &__title {
    // align-self: center;
    font-size: 2.2rem;
    margin-bottom: 10px;
    grid-column-start: 2;
  }

  &__date {
    justify-self: end;
    grid-column-start: 3
  }

  &__description {
    grid-row-start: 4;
    grid-column: 2 / 4;
    align-self: center;
    padding-right: 20px;
  }

  &__button {
    @include base.button-styling(base.$red, base.$hover-red);
    width: 100px;
    height: 30px;
    justify-self: end;
    grid-row-start: 3;
    grid-column-end: 4;
    align-self: center;
  }
}

</style>