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
}
</script>

<style>
body {
  background-color: #f8f8f8;
}
</style>
