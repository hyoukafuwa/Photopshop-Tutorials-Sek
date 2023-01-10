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
      <p class="article__text-section__date">{{ date }}</p>
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

  &__text-section {
    padding: 20px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__date {
      font-size: 0.8rem;
      opacity: 0.6;
    }

    &__title {
      font-size: 1.2rem;
      font-weight: 500;
      @include base.transition(color);

      &:hover {
        color: base.$hover-blue;
      }
    }
  }
}

</style>