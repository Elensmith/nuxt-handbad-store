<template>
  <div>
    <Header @is-open-cart="cartHandler" />
    <main class="main">
      <Navbar />
      <Nuxt />
      <transition name="component-fade" mode="in-out">
        <Cart v-if="opencart" @is-open-cart="cartHandler" />
      </transition>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Header,
    Navbar,
  },
  // asyncData(context) {
  //   return new Promise((resolve, reject) => {
  //     // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //     setTimeout(() => {
  //       resolve({
  //         items: [{
  //           backpacks: [
  //             {
  //                 id: '1',
  //                 title: '',
  //             },
  //             {
                
  //             }
  //           ],
  //         }],
  //       })
  //     }, 1500)
  //   })
  // },
  data() {
    return {
      opencart: false,
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
      tshirts: [
        {
          id: '1',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '2',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '3',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '4',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '5',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '6',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '7',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '8',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '9',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '10',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '11',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '12',
          title: 'Футболка',
          image: '/tshirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
      ],
      shirts: [
        {
          id: '1',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '2',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '3',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '4',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '5',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '6',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '7',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '8',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '9',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '10',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '11',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
        {
          id: '12',
          title: 'Рубашка в клетку',
          image: '/shirt.jpg',
          rate: '4.5',
          price: '150 000',
        },
      ],
    }
  },
  methods: {
    cartHandler(value) {
      this.opencart = value
    },
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* max-width: 1104px; */
  margin-top: 30px;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
