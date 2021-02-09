<template>
  <div>
    <main>
      <WelcomePage />
      <Nuxt />
    </main>
  </div>
</template>

<script>
import WelcomePage from '@/components/WelcomePage'
export default {
  components: {
    WelcomePage,
  },
  // data() {
  //   return {
  //     cartOpen: false,
  //   }
  // },
}
</script>

<style>
/* .main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
} */
body {
  background-color: #f8f8f8;
}
</style>
