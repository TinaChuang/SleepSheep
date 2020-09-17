<template>
  <div>
    <loading :active.sync="isLoading"/>
    this is index
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

<style>

</style>
