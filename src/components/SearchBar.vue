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
    border-style: solid;
    border-width: 2px;
    border-color: base.$grey;
    margin-right: 5px;
    padding-left: 10px;
    border-radius: 5px;
    @include base.transition(border-color, 100ms);

    &:focus {
      outline: none;
      border-color: base.$hover-blue;
    }
  }

  &__submit-button {
    background-color: base.$blue;
    color: #fff;
    width: 50px;
    border-radius: 5px;
    @include base.transition(background-color, 300ms);

    &:hover {
      background-color: base.$hover-blue;
    }
  }
}
</style>