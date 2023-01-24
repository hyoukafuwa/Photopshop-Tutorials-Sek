<script setup>
import { RouterLink } from 'vue-router';
import { auth } from '../firebase'
import { signOut } from '@firebase/auth'

const props = defineProps({
  isLoggedIn: Boolean
})

const emit = defineEmits(['openAuthModal', 'showOrHideSearchBar', 'signedOut'])

// sign out when confirm prompt returns a positive value
function handleSignOut() {
  if (confirm('Möchtest du dich wirklich abmelden?')) {
    signOut(auth).then(() => {
      emit('signedOut')
    })
  }
}
</script>

<template>
  <header class="header">
    <h3 class="header__title">
      <RouterLink to="/">
        Photoshop Tutorials
      </RouterLink>
    </h3>
    <nav class="header__nav">
      <button @click="emit('showOrHideSearchBar')" class="header__nav__search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <button v-if="!isLoggedIn" @click="emit('openAuthModal')" class="header__nav__login">
        <i class="fa-solid fa-user"></i>
      </button>
      <button v-if="isLoggedIn" @click="handleSignOut" class="header__nav__log-out">
        <i class="fa-solid fa-right-from-bracket"></i>
      </button>
      <RouterLink v-if="isLoggedIn" to="/create-post" class="header__nav__create-post">
        <i class="fa-solid fa-plus"></i>
        <span>Add Post</span>
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

    a {
      text-decoration: none;
      color: black;
    }
  }

  &__nav {
    // width: 50px;
    display: flex;
    gap: 10px;
    @include base.justify-align(space-between, center);

    // target button elements in nav
    &__search, &__login, &__log-out {
      @include base.transition(color);
      // remove all the standard button css styling
      @include base.remove-button-styling;
      font-size: 1.3rem;
      color: black;
    
      &:hover {
        @include base.transition(color);
        color: base.$hover-blue;
      }
    }

    &__create-post {
      display: flex;
      font-size: 0.9rem;
      gap: 5px;
      @include base.remove-anchor-styling;
      @include base.button-styling;
      @include base.justify-align();
      height: 35px;
      width: 90px;
    }
  }
}

</style>