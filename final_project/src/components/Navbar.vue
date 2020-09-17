<template>
<div class="bg-primary sticky-top shadow-sm">
  <div class="navbar navbar-expand-md bg-primary navbar-dark">
    <router-link class="navbar-brand" to="/">
      <img src="" alt="Sleep-Sheep" title="Sleep-Sheep">
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item is-active">
          <router-link class="nav-link ml-md-2" to="/about">關於我們</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link mx-md-2" to="/products">眠綿羊們</router-link>
        </li>
        <li class="nav-item d-flex">
          <router-link class="nav-link" to="/cart">
            <!-- <i class="fas fa-shopping-cart"></i> -->
            我的羊圈
            <span
              class="badge badge-pill badge-warm"
              style="transform: translateX(-6px) translateY(-11px)"
              v-if="carts.length"
            >
              {{ carts.length }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-link to="/about">關於我們</router-link> |
    <router-link to="/products">商品列表</router-link> ｜
    <router-link to="/cart">購物車</router-link> |
    <router-link to="/admin">後台</router-link>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      carts: []
    }
  },
  created () {
    this.getCart()
    this.$bus
      .$on('get-cart', () => {
        this.getCart()
      })
  },
  methods: {
    getCart () {
      this.isLoading = true
      const getCartListApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http
        .get(getCartListApi)
        .then(res => {
          this.carts = res.data.data
        })
        .catch(err => {
          console.log(err.response.data.errors)
        })
    }
  }
}
</script>

<style>

</style>
