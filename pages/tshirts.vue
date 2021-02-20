<template>
  <div class="layout">
    <FilterComponent @selected-filter="filterCards" />
    <ProductList :products="tshirts[0]" />
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
  computed: mapState(['tshirts']),
  mounted() {
    this.getTshirts()
  },
  methods: {
    ...mapActions(['getTshirts', 'sortTshirtsAction']),
    filterCards(e) {
      if (e === 'цене') {
        this.sortTshirtsAction('price')
      }
      if (e === 'популярности') {
        this.sortTshirtsAction('rate')
      }
    },
  },
}
</script>
