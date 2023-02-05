<script setup>
const props = defineProps({
  title: String,
  date: String,
  id: {
    type: String,
    required: false
  },
  youTubeUrl: String
})
</script>

<template>
  <article class="article">
      <!-- this is only supposed to be shown if it used on the front page -->
    <RouterLink v-if="id" :to="`/${id}`" class="article__thumbnail">
      <img v-if="youTubeUrl" :src="`https://img.youtube.com/vi/${youTubeUrl}/maxresdefault.jpg`" alt="Rick Astley">
      <img v-else src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" alt="Rick Astley">
    </RouterLink>
      <!-- this is supposed to be shown on the add-post route -->
    <span v-else class="article__thumbnail">
      <img v-if="youTubeUrl" :src="`https://img.youtube.com/vi/${youTubeUrl}/maxresdefault.jpg`" alt="Rick Astley">
      <img v-else src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" alt="Rick Astley">
    </span>
    <section class="article__text-section">
      <i class="article__text-section__date">{{ date }}</i>
      <!-- this is only supposed to be shown if it used on the front page -->
      <RouterLink v-if="id" :to="`/${id}`" class="article__text-section__title">
        <h1>{{ title }}</h1>
      </RouterLink>
      <!-- this is supposed to be shown on the add-post route -->
      <span v-else class="article__text-section__title">
        <h1>{{ title }}</h1>
      </span>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@use '@/assets/base';

.article {
  width: 450px;
  height: 410px;
  @include base.box-shadow;

  &__thumbnail {
    // this makes the image adjust to it's container's size
    img { max-width: 100%; }
  }

  &__text-section {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__date {
      font-size: 0.7rem;
      opacity: 0.6;
      font-family: base.$dateFont;
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

</style>