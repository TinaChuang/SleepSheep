<template>
  <div>
    <loading :active.sync="isLoading"/>
    <h2>商品列表</h2>
    <div class="container">
      <div class="row my-3">
        <div
          class="col-6 col-md-4 col-xl-3"
          v-for="item in products"
          :key="item.id"
        >
          <div class="card shadow-sm border-0 mb-4 rounded">
            <router-link :to="`/product/${item.id}`">
              <img
                class="card-img-top"
                :src="item.imageUrl[0]"
                @alt="item.title"
              />
            </router-link>
            <div class="card-body d-flex flex-column align-items-center justify-content-center">
              <h4 class="mb-0">
                <router-link :to="`/product/${item.id}`">{{ item.title }}</router-link>
              </h4>
              <div class="mt-2 d-lg-flex">
                <del class="text-muted mr-sm-3">
                  <small>原價：{{ item.origin_price | money }}</small>
                </del>
                <p class="text-primary mb-0">售價：<strong>{{ item.price | money }}</strong>
                </p>
              </div>
            </div>
            <div class="card-footer d-flex">
              <router-link :to="`/product/${item.id}`">
                <button type="button" class="btn btn-outline-secondary btn-sm">查看更多</button>
              </router-link>

              <button type="button" class="btn btn-outline-primary btn-sm ml-auto
              d-flex align-items-center" @click.prevent="addToCart(item.id)"
              :disabled="status.loadingItem === item.id">加入購物車
                <i class="ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block"
                v-if="status.loadingItem === item.id" style="width:12px;height:12px"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      newProducts: [],
      filterType: '',
      status: {
        loadingItem: ''
      },
      isLoading: false
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const getProductsApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`
      this.$http
        .get(getProductsApi)
        .then(res => {
          console.log(res)
          this.isLoading = false
          this.products = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart () {}
  }
}
</script>
