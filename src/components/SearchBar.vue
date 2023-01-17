<script setup>
const props = defineProps({
  searchQuery: String
})
</script>

<template>
  <form class="form">
    <input type="text" class="form__search-bar" placeholder="How to...">
    <button class="form__submit-button">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
</template>

<style lang="scss">
@use '@/assets/base';

.form {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;

  &__search-bar {
    width: 70%;
    height: 40px;
    margin-right: 10px;
    @include base.input-styling;
  }

  &__submit-button {
    width: 50px;
    @include base.button-styling;
  }
}
</style>