<template>
<div id="app">
  <Navbar />
  <router-view/>
  <Footer />
</div>
</template>

<script>
import Navbar from '@/components/BackendNavbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  comments: {
    Navbar,
    Footer
  }
}
</script>
