<script setup>
const props = defineProps({
  title: String,
  date: String
})
</script>

<template>
  <article class="article">
    <RouterLink to="/" class="article__thumbnail">
      <img src="https://www.lamodula.at/media/wysiwyg/Lexikon/esche-holz-baum-1.jpeg" alt="Rick Astley">
    </RouterLink>
    <section class="article__text-section">
      <i class="article__text-section__date">{{ date }}</i>
      <RouterLink to="/" class="article__text-section__title">
        <h2>{{ title }}</h2>
      </RouterLink>
    </section>
  </article>
</template>

<style lang="scss">
@use '@/assets/base';

.article {
  width: 450px;
  @include base.box-shadow;

  &__thumbnail {
    display: block;
    // this makes the image adjust to it's container's size
    img { max-width: 100%; }
  }

  &__text-section {
    padding: 20px;

    &__date {
      font-size: 0.7rem;
      opacity: 0.6;
      font-family: base.$dateFont;
    }

    &__title {
      font-size: 1.2rem;
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

</style>