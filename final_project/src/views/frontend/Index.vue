<template>
  <div>
    <loading :active.sync="isLoading"/>
    <div class="section_1 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h1 style="font-size: 4rem;">眠綿羊</h1>
            <h3 style="font-size: 2rem;">Sleep sheep</h3>
            <p style="font-size: 1.5rem;">sleep wll with you</p>
            <router-link class="btn btn-pink px-5" to="/products">
              眠綿羊群
            </router-link>
          </div>
          <div class="col-12 col-md-6">
            <img class="img-fluid" src="@/assets/image/sheep-1.svg" alt="Sleep-Sheep" title="Sleep-Sheep">
          </div>
        </div>
      </div>
    </div>
    <div class="section_2">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img class="img-fluid" src="@/assets/image/sheep-2.svg" alt="Sleep-Sheep" title="Sleep-Sheep">
          </div>
          <div class="col-12 col-md-6"></div>
        </div>
      </div>
    </div>
    <div class="section_3"></div>
    <div class="section_4"></div>
    <div class="section_5">
      <div class="container">
        <div class="row">
          <div class="col-12"></div>
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
