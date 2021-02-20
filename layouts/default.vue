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
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Navbar,
    Footer,
  },
  data() {
    return {
      opencart: false,
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
  margin-top: 30px;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 506px) {
  .main {
    flex-direction: column;
  }
}
</style>
