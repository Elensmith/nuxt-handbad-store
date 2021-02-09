<template>
  <div class="cart">
    <div class="cart__container">
      <h2 class="cart__title">Корзина</h2>
      <span class="cart__span">Товары в корзине</span>
      <!-- <nuxt-link to="./"> -->
      <img
        src="/close.svg"
        alt=""
        class="card__close"
        @click="$emit('is-open-cart', false, $router.go(-1))"
      />
      <!-- </nuxt-link> -->
      <div class="cart__product-container">
        <CartComponent />
        <CartComponent />
        <CartComponent />
      </div>
      <form class="form">
        <p class="form__title">Оформить заказ</p>
        <!-- <input type="text" placeholder="Ваше имя" /> -->
        <input class="form__phone" type="text" placeholder="Ваше имя" />
        <input type="text" placeholder="Телефон" />
        <input type="text" placeholder="Адрес" />
        <button class="form__button" type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
import CartComponent from '@/components/CartComponent'
export default {
  components: {
    CartComponent,
  },
  props: {
    opencart: Boolean,
  },
  data() {
    return {
      cartOpen: this.opencart,
    }
  },
  // methods: {
  //   handler() {
  //   },
  // },
}
</script>

<style scoped>
.cart {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: flex-end;
  right: 0;
}
.cart__title {
  font-size: 32px;
  margin: 52px 0 24px 48px;
}
.cart__span {
  margin-left: 48px;
  color: #59606d;
}
.card__close {
  position: absolute;
  right: 48px;
  top: 60px;
  cursor: pointer;
}
.cart__container {
  width: 460px;
  height: 100%;
  background-color: white;
}
.cart__product-container {
  margin-top: 16px;
}
.form__title {
  font-size: 18px;
  color: #59606d;
  text-align: left;
  margin: 32px auto auto 48px;
  max-width: 364px;
}
input {
  width: 364px;
  height: 50px;
  background: #f8f8f8;
  border-radius: 8px;
  border: none;
  margin-top: 16px;
  text-indent: 14px;
  outline: none;
}
input::placeholder {
  /* padding-left: 14px; */
  color: #959dad;
}
.form {
  text-align: center;
}
.form__button {
  width: 364px;
  height: 50px;
  background-color: #1f1f1f;
  border-radius: 8px;
  border: none;
  color: white;
  margin: 24px auto 210px auto;
}
.form__button:hover {
  background-color: #59606d;
}
</style>
