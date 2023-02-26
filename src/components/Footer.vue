<script setup></script>

<template>
  <footer class="footer">
    <h3 class="footer__copyright">© 2023, M. Fernando, Photoshop Tutorials</h3>
  </footer>
</template>

<style lang="scss">
@use '@/assets/base';

.footer {
  display: flex;
  height: 60px;
  width: 100%;
  background-color: base.$hover-blue;
  color: #fff;
  @include base.justify-align;
  @include base.box-shadow;
}

@media (max-width: 640px) {
  .footer {
    font-size: 4vw;
  }
}

</style>