<script setup>

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
        <form class="auth-modal__content__lower-part__form">
          <input type="email" placeholder="E-Mail" class="auth-modal__content__lower-part__form__email">
          <input type="password" placeholder="Passwort" class="auth-modal__content__lower-part__form__password">
          <button class="auth-modal__content__lower-part__form__submit">
            Login
          </button>
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
      justify-content: space-between;
      align-items: flex-start;
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
      align-items: center;
      height: 400px;

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