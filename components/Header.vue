<template>
  <div class="header">
    <nuxt-link class="header__logo" to="/">TestList</nuxt-link>
    <div class="header__cart-link" @click="$emit('is-open-cart', true)"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  background-color: white;
}
.header__logo {
  margin-top: 20px;
  font-size: 22px;
  text-decoration: none;
  color: #1f1f1f;
  margin-left: 88px;
}
.header__cart-link {
  background-image: url('/cart.svg');
  width: 32px;
  height: 32px;
  margin-right: 40px;
  margin-top: 20px;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
