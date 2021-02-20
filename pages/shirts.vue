<template>
  <div class="layout">
    <FilterComponent @selected-filter="filterCards" />
    <ProductList :products="shirts[0]" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import FilterComponent from '@/components/FilterComponent'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    ProductList,
    FilterComponent,
  },
  computed: mapState(['shirts']),
  mounted() {
    this.getShirts()
  },
  methods: {
    ...mapActions(['getShirts', 'sortShirtsAction']),
    filterCards(e) {
      if (e === 'цене') {
        this.sortShirtsAction('price')
      }
      if (e === 'популярности') {
        this.sortShirtsAction('rate')
      }
    },
  },
}
</script>
