<template>
  <div>
    <loading :active.sync="isLoading"/>
    <div class="container-fluid banner-products py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 text-light">
            <h3>不同的眠綿羊喜歡不同的入睡方式</h3>
            <p>檢視自己的睡眠困擾，來選擇不同的眠綿羊，讓你事半功倍。你的好睡眠，是眠綿羊最大的幸福與驕傲。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row my-3">
        <div
          class="col-6 col-md-4"
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
    addToCart (id, quantity = 1) {
      this.isLoading = true
      const addToCartApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.status.loadingItem = id
      const cart = {
        product: id,
        quantity
      }
      this.$http
        .post(addToCartApi, cart)
        .then(res => {
          this.isLoading = false
          this.status.loadingItem = ''
          this.$bus.$emit('get-cart')
          this.$bus.$emit(
            'message:push',
            '商品已成功加入購物車!',
            'success'
          )
        })
        .catch(err => {
          console.log('addToCart: ', err)
          this.isLoading = false
          this.status.loadingItem = ''
          this.$bus.$emit(
            'message:push',
            `加入失敗!${err}`,
            'danger'
          )
        })
    }
  }
}
</script>
