<template>
  <div :key="product.id" class="product-card">
    <img class="product-card__image" :src="product.image" alt="" />
    <div class="product-card__info-box">
      <p class="product-card__title">{{ product.title }}</p>
      <p class="product-card__price">
        {{ product.price }}
        <span class="product-card__price-logo">₽</span>
      </p>
      <div class="product-card__popular-box">
        <img class="product-card__popular" src="/popular.svg" alt="" />
        <span class="product-card__rate">{{ product.rate }}</span>
      </div>
    </div>
    <div
      class="product-card__trash"
      @click="$emit('remove-from-cart', product)"
    />
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 364px;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin: 0 auto 12px auto;
  align-items: center;
}
.product-card__info-box {
  display: flex;
  flex-direction: column;
}
.product-card__image {
  width: 70.57px;
  height: 90px;
  margin-left: 25px;
  object-fit: cover;
}
.product-card__title {
  color: #59606d;
  font-size: 14px;
  max-width: 170px;
}
.product-card__trash {
  background-image: url('/trash.svg');
  width: 32px;
  height: 32px;
  margin-right: 16px;
  cursor: pointer;
}
.product-card__trash:hover {
  background-image: url('/trash_hover.svg');
  background-repeat: no-repeat;
}
.product-card__rate {
  color: #f2c94c;
  font-size: 10px;
  font-weight: 700;
}
.product-card__popular {
  width: 20px;
  height: 20px;
}
.product-card__popular-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 34px;
  max-height: 20px;
  margin-top: 16px;
}
.product-card__price {
  color: #1f1f1f;
  font-size: 14px;
  text-align: left;
  margin-top: 8px;
}
@media screen and (max-width: 450px) {
  .product-card {
    max-width: 320px;
    margin: auto;
  }
}
</style>
