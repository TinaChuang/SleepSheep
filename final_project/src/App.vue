<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    this.isLoading = false
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans+TC:wght@300;400;500;900&family=Roboto:wght@400;700&display=swap');
@import './assets/scss/main';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Noto Sans TC','Roboto', sans-serif;
}
</style>
