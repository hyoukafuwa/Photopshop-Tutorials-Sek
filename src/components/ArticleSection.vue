<script setup>
import { useRoute } from 'vue-router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { onMounted, ref } from 'vue'

const route = useRoute()
const articleId = route.params.articleId
const article = ref({})

const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    required: true
  }
})

onMounted(async () => {
  const docRef = doc(db, 'tutorials', articleId)
  const docSnap = await getDoc(docRef)

  const articleData = docSnap.data()

  article.value = {
    title: articleData.title,
    description: articleData.description,
    date: articleData.date,
  }
})

</script>

<template>
  <main v-if="article" class="article-section">
    <h1 class="article-section__title">
      {{ article.itle }}
    </h1>
    <span class="article-section__date">
      {{ article.dates }}
    </span>
    <section class="article-section__video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5N_fTRZuTkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
    <section class="article-section__description">
      <p class="article-section__article__description__paragraph">
        {{ article.description }}
      </p>
    </section>
    <button class="article-section__button" v-if="isLoggedIn">
      Delete
    </button>
  </main>
</template>

<style lang="scss">
@use '@/assets/base';

.article-section {
    width: 600px;
    // min-width: 600px;
    @include base.box-shadow;
    // display: flex;
    // flex-direction: column;
    display: grid;

    &__video {

    }

    &__title {
      // align-self: center;
      font-size: 2.2rem;
      margin-bottom: 10px;
    }

    &__description {
      // justify-self: flex-start;
    }

    &__button {
    }
  }

</style>