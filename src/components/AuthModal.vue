<script setup>

</script>

<template>
  <section class="auth-modal">
    <h2>Login</h2>
    <form class="auth-modal__form">
      <input type="email" placeholder="E-Mail" class="auth-modal__form__email">
      <input type="password" placeholder="Passwort" class="auth-modal__form__password">
      <input type="submit" value="Login" class="auth-modal__form__submit">
    </form>
  </section>
</template>

<style lang="scss">
@use '@/assets/base';

.auth-modal {
  // center modal absolutely
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 420px;
  width: 340px;
  @include base.box-shadow;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @include base.justify-align(space-evenly);
  z-index: 10;

  &::backdrop {
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100px;

    input {
      padding: 5px;
      width: 200px;
    }
  }
}

</style>