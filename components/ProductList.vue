<template>
  <div class="product-list">
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
  methods: {
    ...mapActions(['addToCartState']),
    addtocart(product) {
      this.addToCartState(product)
    },
  },
}
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  max-width: 1104px;
  margin-right: 88px;
}
</style>
