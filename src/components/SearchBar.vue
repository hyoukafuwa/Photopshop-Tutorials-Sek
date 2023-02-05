<script></script>

<template>
  <form @submit.prevent="" class="search-bar-form">
    <input class="search-bar-form__search-bar" type="text" placeholder="Wie..." v-model="searchBarValue">
    <button class="search-bar-form__search-button" @click="handleSearch">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
</template>

<style lang="scss">

.search-bar-form {
  display: flex;
  height: 35px;
  margin-right: 15px;
  
  &__search-bar {
    @include base.input-styling;
    width: 200px;
    border-radius: 0;
  }

  &__search-button {
    width: 40px;
    @include base.button-styling;
    border-radius: 0;
  }
}
</style>