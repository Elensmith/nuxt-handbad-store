<template>
  <div class="layout">
    <FilterComponent @selected-filter="filterCards" />
    <ProductList :products="backpacks[0]" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import FilterComponent from '@/components/FilterComponent'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    FilterComponent,
    ProductList,
  },
  computed: mapState(['backpacks']),
  mounted() {
    this.getBackpacks()
  },
  methods: {
    ...mapActions(['getBackpacks', 'sortBackpacksAction']),
    filterCards(e) {
      if (e === 'цене') {
        this.sortBackpacksAction('price')
      }
      if (e === 'популярности') {
        this.sortBackpacksAction('rate')
      }
    },
  },
}
</script>

<style>
.layout {
  margin: auto;
}
</style>
