<script setup>
import { reactive } from 'vue'
import { methods } from '../state/state'

import createDateString from '../utils/createDateString'
import ArticleCard1 from '../components/ArticleCard1.vue'

const articleData = reactive({
  title: '',
  youTubeUrl: '',
  description: ''
})

// whenever the input is empty it shall use 'Beispieltext' as a placeholder
function asignTitle() {
  if (articleData.title) return articleData.title
  return 'Beispieltitel'
}

async function handleAddArticles() {
  // return an alert if one of the fields is without any value
  for (const val of Object.values(articleData)) {
    if (!val) return alert('Eines der Felder ist leer')
  }

  methods.addArticles(articleData.title, articleData.youTubeUrl, articleData.description)

  // reset all fields
  articleData.title = ''
  articleData.youTubeUrl = ''
  articleData.description = ''
}
</script>

<template>
  <main class="add-post">
    <form @submit.prevent="handleAddArticles()" class="add-post__form">
      <span>
        <label for="add-post__form__title-input">Titel</label>
        <input v-model="articleData.title" type="text" placeholder="Tutorial..." class="add-post__form__title-input">
      </span>
      <span>
        <label for="add-post__form__yt-url-input">YouTube-URL</label>
        <input v-model="articleData.youTubeUrl" type="text" placeholder="https://youtu.be/dQw4w9WgXcQ" class="add-post__form__yt-url-input">
      </span>
      <span>
        <label for="add-post__form__description-input">Beschreibung</label>
        <textarea v-model="articleData.description" type="text" maxlength="200" placeholder="Es geht um..." class="add-post__form__description-input"></textarea>
        <i class="add-post__form__description-char-count">{{ articleData.description.length }}/200</i>
      </span>
      <button class="add-post__form__submit-article">Absenden</button>
    </form>
    <section class="add-post__preview">
      <ArticleCard1 :title="asignTitle()" :date="createDateString(new Date())"/>
    </section>
  </main>
</template>

<style lang="scss">
@use '../assets/base';

.add-post {
  min-height: 100vh;
  gap: 100px;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  @include base.justify-align(center, flex-start);

  &__form {
    display: flex;
    flex-direction: column;

    span {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 20px;

      input {
        width: 400px;
        height: 35px;
        @include base.input-styling;
      }

      textarea {
        font-family: base.$font;
        padding: 5px;
        min-width: 400px;
        max-width: 400px;
        min-height: 140px;
        @include base.input-styling;
      }

      // move char count to end
      i {
        align-self: flex-end
      }
    }

    &__submit-article {
      @include base.button-styling;
      height: 40px;
    }
  }

  &__preview {
    width: 800px;
  }
}

@media (max-width: 1024px) {
  .add-post {
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    &__preview {
      width: inherit;
    }
  }
}

</style>