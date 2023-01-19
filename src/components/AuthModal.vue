<script setup>
import { ref, reactive } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const user = reactive({
  email: '',
  password: ''
})

const errorMessage = ref('')

function login() {
  // check if field is empty
  if (!user.email || !user.password) {
    errorMessage.value = 'Das Feld darf nicht leer sein'
    return
  }

  // firebase auth
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then(data => {
      console.log('succesfully logged in')
      console.log(auth.currentUser)
    })
    .catch(err => {
      switch (err.code) {
        case 'auth/invalid-email':
          errorMessage.value = 'falsche E-Mail'
          break;
        case 'auth/user-not-found':
          errorMessage.value = 'kein Konto mit dieser E-Mail wurde gefunden'
          break;
        case 'auth/wrong-password':
          errorMessage.value = 'falsches Passwort'
          break
        default:
          errorMessage.value = 'E-Mail oder Passwort ist falsch'
          break
      }
    })
}
</script>

<template>
  <section class="auth-modal">
    <!-- backdrop element of auth modal -->
    <div @click="$emit('closeModal')" class="auth-modal__background"></div>
    <div class="auth-modal__content">
      <div class="auth-modal__content__upper-part">
        <h2 class="auth-modal__content__upper-part__title">Login</h2>
        <button @click="$emit('closeModal')" class="auth-modal__content__upper-part__close-btn">
          <i class="fa-sharp fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="auth-modal__content__lower-part">
        <span v-if="errorMessage" class="auth-modal__content__lower-part__error-message">
          <i>{{ errorMessage }}</i>
        </span>
        <form class="auth-modal__content__lower-part__form">
          <input v-model="user.email" type="email" placeholder="E-Mail" class="auth-modal__content__lower-part__form__email">
          <input v-model="user.password" type="password" placeholder="Passwort" class="auth-modal__content__lower-part__form__password">
          <button @click.prevent="login" class="auth-modal__content__lower-part__form__submit">Login</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use '@/assets/base';

.auth-modal {
  // modal backdrop
  &__background {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &__content {
    // center modal absolutely
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    height: 300px;
    width: 340px;
    @include base.box-shadow;
    display: flex;
    flex-direction: column;
    @include base.justify-align(space-between);
    z-index: 10;

    &__upper-part {
      display: flex;
      width: inherit;
      @include base.justify-align(space-between, flex-start);
      padding: 10px;

      &__close-btn {
        @include base.remove-button-styling;

        &:hover {
          @include base.transition(color);
          color: base.$hover-blue;
        }
      }
    }

    &__lower-part {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      height: 400px;

      &__error-message {
        font-size: 0.8rem;
        color: base.$red;
      }

      &__form {
        display: flex;
        gap: 5px;
        flex-direction: column;

        input {
          width: 300px;
          height: 40px;
          @include base.input-styling;
        }

        &__submit {
          width: 300px;
          height: 40px;
          @include base.button-styling;
        }
      }
    }
  }
}

</style>