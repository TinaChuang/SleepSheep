<template>
  <div id="app">
    <Toast/>
    <router-view/>
  </div>
</template>

<script>
import Toast from '@/components/Toasts.vue'

export default {
  components: {
    Toast
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans+TC:wght@300;400;500;900&family=Roboto:wght@400;700&display=swap');
@import './assets/scss/main';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Noto Sans TC','Roboto', sans-serif;
}
</style>
