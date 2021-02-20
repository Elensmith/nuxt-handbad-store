<template>
  <div class="product-list">
    <transition name="fade">
      <h1 v-if="showAdded" class="product-list__added">Добавлено</h1>
    </transition>
    <div v-for="(product, i) in products" :key="i">
      <ProductCard :product="product" @add-to-cart="addtocart" />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { mapActions } from 'vuex'
export default {
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      showAdded: false,
    }
  },
  methods: {
    ...mapActions(['addToCartState']),
    addtocart(product) {
      this.showAdded = true
      this.addToCartState(product)
      setTimeout(() => {
        this.showAdded = false
      }, 500)
    },
  },
}
</script>

<style scoped>
.product-list {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  max-width: 1104px;
  margin: auto;
  /* margin-right: 88px; */
}
.product-list__added {
  font-size: 50px;
  position: absolute;
  z-index: 1;
  margin: auto;
  left: 0;
  right: 0;
  top: 30%;
  text-align: center;
  width: fit-content;
  font-weight: 100;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 1414px) {
  .product-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 1146px) {
  .product-list {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 767px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}
</style>
