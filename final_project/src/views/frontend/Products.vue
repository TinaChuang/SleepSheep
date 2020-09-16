<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    商品列表
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
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        console.log(res)
        this.isLoading = false
      })
      .catch(err => {
        console.log('get products err: ', err)
      })
  }
}
</script>
