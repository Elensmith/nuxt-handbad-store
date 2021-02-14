<template>
  <div>
    <ProductList :products="tshirts[0]" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    ProductList,
  },
  computed: mapState(['tshirts']),
  mounted() {
    this.getTshirts()
  },
  methods: {
    ...mapActions(['getTshirts']),
  },
}
</script>
