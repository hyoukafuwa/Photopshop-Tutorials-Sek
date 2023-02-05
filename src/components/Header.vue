<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue'
import { state, methods } from '../state/state'

const emit = defineEmits(['openAuthModal', 'showOrHideSearchBar'])

const searchBarValue = ref('')
const router = useRouter()

// sign out when confirm prompt returns a positive value
function handleSignOut() {
  if (confirm('Hiermit bestätigst du, dass du dich abmeldest')) {
    methods.signOut()
    router.push('/')
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
      <button v-if="!state.isLoggedIn" @click="emit('openAuthModal')" class="header__nav__login">
        <i class="fa-solid fa-user"></i>
      </button>
      <button v-if="state.isLoggedIn" @click="handleSignOut" class="header__nav__log-out">
        <i class="fa-solid fa-right-from-bracket"></i>
      </button>
      <RouterLink v-if="state.isLoggedIn" to="/add-post" class="header__nav__add-post">
        <i class="fa-solid fa-plus"></i>
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
    display: flex;
    gap: 5px;
    @include base.justify-align(space-between, center);

    // target all button elements in nav
    &__login, &__log-out, &__add-post {
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
  }
}

</style>