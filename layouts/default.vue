<template>
  <div>
    <Header />
    <main class="main">
      <Navbar />
      <Nuxt />
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
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
}
</style>
