<template>
  <div id="app">
  <Navbar />
  <router-view/>
  <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
  .slogan {
    font-family: 'Lobster', sans-serif;
  }
</style>
