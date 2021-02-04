<template>
  <div class="header">
    <nuxt-link class="header__logo" to="/">TestList</nuxt-link>
    <nuxt-link class="header__cart" to="/cart"></nuxt-link>
    <!-- <img scr="/cart.svg" alt="" class="header__cart" /> -->
  </div>
</template>

<style scoped>
.header {
  /* position: relative; */
  /* display: flex;
  flex-direction: row;
  justify-content: space-between  ; */
  width: 100%;
  height: 66px;
  background-color: white;
}
.header__logo {
  /* position: absolute; */
  /* top: 36%; */
  font-size: 22px;
  text-decoration: none;
  color: #1f1f1f;
  margin-left: 88px;
}
.header__cart {
  background-image: url(/cart.svg);
}
</style>
