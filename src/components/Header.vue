<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <h3 class="header__title">
      <RouterLink to="/">
        Photoshop Tutorials
      </RouterLink>
    </h3>
    <nav class="header__nav">
      <button @click="$emit('showOrHideSearchBar')" class="header__nav-search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <RouterLink to="/" class="header__nav-login">
        <i class="fa-solid fa-user"></i>
      </RouterLink>
    </nav>
  </header>
</template>

<style lang="scss">
@use "@/assets/base";

.header {
  display: flex;
  width: 100%;
  height: 60px;
  @include base.justify-align(space-around);
  @include base.box-shadow;

  &__title {
    font-weight: bold;
    font-size: 1.2rem;
  }

  &__nav {
    width: 50px;
    display: flex;
    justify-content: space-around;

    // target all elements in nav
    & > * {
      @include base.transition(color);
    
      &:hover {
        @include base.transition(color);
        color: base.$hover-blue;
      }
    }
  }
}

</style>