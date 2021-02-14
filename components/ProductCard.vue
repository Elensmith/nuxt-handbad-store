<template>
  <div :key="product.id" class="product-card">
    <img class="product-card__image" :src="product.image" alt="" />
    <img class="product-card__popular" src="/popular.svg" alt="" />
    <span class="product-card__rate">{{ product.rate }}</span>
    <img
      class="product-card__cart"
      src="/card_cart.svg"
      alt=""
      @click="$emit('add-to-cart', product)"
    />
    <p class="product-card__title">{{ product.title }}</p>
    <p class="product-card__price">
      {{ product.price }}
      <span class="product-card__price-logo">₽</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.product-card {
  width: 264px;
  height: 272px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  position: relative;
  text-align: center;
}
.product-card__popular {
  position: absolute;
  left: 7%;
  top: 10%;
}
.product-card__rate {
  position: absolute;
  left: 16%;
  top: 12%;
  color: #f2c94c;
  font-size: 10px;
  font-weight: 700;
}
.product-card__cart {
  cursor: pointer;
  position: absolute;
  right: 10%;
  top: 10%;
}
.product-card__image {
  margin-top: 18px;
  margin-bottom: 16px;
  width: 143px;
  height: 180px;
  object-fit: cover;
}
.product-card__title {
  color: #59606d;
  font-size: 14px;
  text-align: left;
  margin-left: 10%;
  margin-bottom: 6px;
}
.product-card__price {
  color: #1f1f1f;
  font-size: 14px;
  padding-bottom: 17px;
  text-align: left;
  margin-left: 10%;
}
.product-card__price-logo {
  font-size: 14px;
}
</style>
