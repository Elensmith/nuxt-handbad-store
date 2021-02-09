<template>
  <div class="product-list">
    <div v-for="(backpack, i) in backpacks" :key="i">
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      backpacks: [
        {
          id: '1',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '2',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '3',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '4',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '5',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '6',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '7',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '8',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '9',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '10',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '11',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '12',
          title: 'Рюкзак Louis Vuitton Discovery',
          image: '/bag.jpg',
          rate: '4.5',
          price: '150 000',
        },
      ],
    }
  }
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
