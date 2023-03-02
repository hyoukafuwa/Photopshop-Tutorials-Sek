<script setup>
import { state, methods } from '../state/state'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  article: {
    title: String,
    youTubeUrl: String,
    date: String,
    id: String,
    description: String
  }
})

function handleDeletinArticle() {
  if (confirm('Möchtest du diesen Artikel wirklich löschen?')) {
    methods.deleteArticle(props.article.id)
    router.push({ name: 'Main' })
    alert('Artikel wurde aus der Datenbank gelöscht')
  }
}

</script>

<template>
  <main v-if="article" class="article-section">
    <h1 class="article-section__title">
      {{ article.title }}
    </h1>
    <span class="article-section__date">
      <i>{{ article.date }}</i>
    </span>
    <section class="article-section__video">
      <iframe :src="`https://www.youtube.com/embed/${article.youTubeUrl}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
    <button class="article-section__button" v-if="state.isLoggedIn" @click="handleDeletinArticle">
      <i class="fa-solid fa-trash"></i>
      Löschen
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
  width: 50vw;
  // min-width: 700px;
  @include base.box-shadow;
  display: grid;
  grid-template-columns: 1fr repeat(2, minmax(150px, 300px)) 1fr;
  grid-template-rows: repeat(3, auto) minmax(200px, 1fr);
  gap: 20px;

  &__title {
    font-size: 2rem;
    grid-column: 2 / 4;
  }

  &__date {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    align-self: center;
    font-family: base.$date-font;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  &__video {
    grid-column: 2 / 4;

    iframe {
      aspect-ratio: 16 / 9;
      // height: 100%;
      width: 100%;
    }
  }

  &__button {
    grid-column: 3 / 4;
    @include base.button-styling(base.$red, base.$hover-red);
    width: 90px;
    height: 35px;
    align-self: center;
    justify-self: end;
    font-weight: 600;
    display: flex;
    @include base.justify-align(space-evenly, center);
  }

  &__description {
    grid-row: 4 / 5;
    grid-column: 2 / 4;
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media (max-width: 1280px) {
  .article-section {
    width: 100vw;

    &__date {
      margin-left: 10px;
    }

    &__button {
      margin-right: 10px;
    }
  }
}

</style>