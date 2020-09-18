<template>
  <div>
    <loading :active.sync="isLoading"/>
    <div class="section_1">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-12 col-md-3">
            <h1 style="font-size: 4rem;">眠綿羊</h1>
            <h3 style="font-size: 2rem;">Sleep sheep</h3>
            <p style="font-size: 1.5rem;">sleep wll with you</p>
            <router-link class="d-block btn btn-pink" to="/products">
              眠綿羊群
            </router-link>
          </div>
          <div class="col-12 col-md-9"></div>
        </div>
      </div>
    </div>
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
