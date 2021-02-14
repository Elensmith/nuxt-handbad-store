<template>
  <div>
    <ProductList :products="backpacks[0]" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    ProductList,
  },
  computed: mapState(['backpacks']),
  mounted() {
    this.getBackpacks()
  },
  methods: {
    ...mapActions(['getBackpacks']),
  },
}
</script>
