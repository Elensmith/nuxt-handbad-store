<template>
  <div>
    <ProductList :products="shirts[0]" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    ProductList,
  },
  computed: mapState(['shirts']),
  mounted() {
    this.getShirts()
  },
  methods: {
    ...mapActions(['getShirts']),
  },
}
</script>
