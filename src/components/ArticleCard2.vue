<script setup>
const props = defineProps({
  title: String,
  date: String,
  id: String,
})
</script>

<template>
  <article class="article">
    <RouterLink :to="`/${id}`" class="article__thumbnail">
      <img src="https://www.lamodula.at/media/wysiwyg/Lexikon/esche-holz-baum-1.jpeg" alt="Rick Astley">
    </RouterLink>
    <section class="article__text-section">
      <i class="article__text-section__date">{{ date }}</i>
      <RouterLink :to="`/${id}`" class="article__text-section__title">
        <h1>{{ title }}</h1>
      </RouterLink>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@use '@/assets/base';

.article {
  display: flex;
  max-width: 450px;
  min-width: 400px;
  height: 140px;
  @include base.box-shadow;

  &__thumbnail {
    height: 100%;

    img { 
      max-height: 100%;
    }
  }

  &__text-section {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    &__date {
      font-size: 0.7rem;
      opacity: 0.6;
      font-family: base.$dateFont;
    }

    &__title {
      font-size: 2.5rem;
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

@media (max-width: 481px) {
  .article__text-section__title {
    font-size: 2rem;
  }
}

</style>