<template>
  <div class="product-card">
    <img class="product-card__image" src="/bag.jpg" alt="" />
    <img class="product-card__popular" src="/popular.svg" alt="" />
    <span class="product-card__rate">4.5</span>
    <img class="product-card__cart" src="/card_cart.svg" alt="" />
    <p class="product-card__title">Рюкзак Louis Vuitton Discovery</p>
    <p class="product-card__price">
      150000
      <span class="product-card__price-logo">₽</span>
    </p>
  </div>
</template>

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
  position: absolute;
  right: 10%;
  top: 10%;
}
.product-card__image {
  margin-top: 18px;
  margin-bottom: 16px;
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
