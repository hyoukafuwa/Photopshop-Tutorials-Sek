<script setup>
const props = defineProps({
  article: {
    title: String,
    youTubeUrl: String,
    date: String,
    id: String,
  }
})
</script>

<template>
  <article class="article">
    <RouterLink :to="`/${article.id}`" class="article__thumbnail">
      <img :src="`https://img.youtube.com/vi/${article.youTubeUrl}/maxresdefault.jpg`" :alt="article.title">
    </RouterLink>
    <section class="article__text-section">
      <i class="article__text-section__date">{{ article.date }}</i>
      <RouterLink :to="`/${article.id}`" class="article__text-section__title">
        <h1>{{ article.title }}</h1>
      </RouterLink>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@use '@/assets/base';

.article {
  display: flex;
  min-width: 500px;
  height: 160px;
  @include base.box-shadow;

  &__thumbnail {
    height: 100%;

    img { 
      aspect-ratio: 16 / 9;
      height: 100%;
    }
  }

  &__text-section {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;

    &__date {
      font-size: 0.7rem;
      opacity: 0.6;
      font-family: base.$date-font;
    }

    &__title {
      font-size: 1.8rem;
      font-weight: 500;
      text-decoration: none;
      color: black;
      @include base.transition(color);

      &:hover {
        color: base.$hover-blue;
      }
    }
  }
}

@media (max-width: 640px) {
  .article {
    flex-direction: column;
    min-width: 0;
    width: 80vw;
    height: fit-content;

    &__thumbnail img {
      width: 100%;
    }
  }
}


</style>