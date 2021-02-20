<template>
  <div class="header">
    <nuxt-link class="header__logo" to="/">TestList</nuxt-link>
    <div class="header__cart-link" @click="$emit('is-open-cart', true)"></div>
    <div v-if="cart.length > 0" class="header__cart-counter">
      <p class="header__cart-counter_amount">{{ cart.length }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['cart']),
  },
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
.header__cart-counter {
  position: absolute;
  right: 38px;
  top: 14px;
  width: 18px;
  height: 18px;
  background-color: orange;
  border-radius: 50%;
  text-align: center;
  border: 1px solid black;
}
.header__cart-counter_amount {
  font-size: 15px;
}
@media screen and (max-width: 882px) {
  .header__logo {
    margin-left: 30px;
  }
}
</style>
