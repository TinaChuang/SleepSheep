<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center my-5">
      <div class="col-12 col-md-7">
        <img :src="product.imageUrl[0]" class="img-fluid" :alt="product.title">
      </div>
      <div class="col-12 col-md-5 d-flex flex-column justify-content-center">
        <p class="h2 mt-3 mt-md-0 text-primary">{{ product.title }}</p>
        <hr class="border-primary mt-0 w-100" style="border-width:1.5px">
        <p>{{ product.content }}</p>
        <div class="d-flex">
          <p class="h4 text-primary mb-0 mr-3">
            售價：<strong>{{ product.price | money}}</strong>
          </p>
          <del class="text-muted">
            <small>原價：{{ product.origin_price | money}}</small>
          </del>
        </div>
        <div class="d-flex mt-3">
          <div class="w-50 mr-3">
            <select name="unit" class="form-control mr-3 border border-dark"
              v-model="product.num" style="text-align:center; text-align-last:center">
              <option class="text-center" :value="num" v-for="num in 8" :key="num">
                {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <button
            type="button"
            class="btn btn-outline-primary w-50 d-flex justify-content-center align-items-center"
            @click="addToCart(product.id, product.num)"
          >
            <i
              class="mr-2 spinner-grow spinner-grow-sm"
              v-if="status.loadingItem === product.id"
            ></i>
              加到購物車
          </button>
        </div>
      </div>
    </div>
    <div class="row my-5 border-bottom">
      <div class="col-12 col-md-3">
        <h4 class="text-primary">眠綿羊介紹</h4>
      </div>
      <div class="col-12 col-md-9">
        <p v-html="product.description"></p>
      </div>
    </div>
    <div class="row my-5 border-bottom">
      <div class="col-12 col-md-3">
        <h4 class="text-primary">購買須知</h4>
      </div>
      <div class="col-12 col-md-9">
        <p>因眠綿羊屬於特殊生物，故下單後，會有專人聯絡您協助預備眠綿羊的生活環境與送達時間。</p>
      </div>
    </div>
    <div class="row my-5 border-bottom">
      <div class="col-12 col-md-3">
        <h4 class="text-primary">退定需知</h4>
      </div>
      <div class="col-12 col-md-9">
        <p>因眠綿羊屬於特殊生物，故送出退訂後，會有專人聯絡您協助送回眠綿羊的時間與方式。若是您有多次退訂的紀錄，眠綿羊可是會記仇的。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      product: {
        num: 1,
        imageUrl: [],
        options: {}
      },
      status: {
        loadingItem: ''
      },
      isLoading: false
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const { id } = this.$route.params
      const getProductApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.$http
        .get(getProductApi)
        .then(res => {
          this.isLoading = false
          this.product = res.data.data
          this.$set(this.product, 'num', 1)
          console.log(this.product)
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
          this.isLoading = false
          this.status.loadingItem = ''
          this.$bus.$emit(
            'message:push',
            `加入失敗!${err.response.data.errors}`,
            'danger'
          )
        })
    }
  }
}
</script>
