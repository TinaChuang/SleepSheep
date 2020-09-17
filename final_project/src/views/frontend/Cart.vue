<template>
  <div>
    <loading :active.sync="isLoading"/>
    <div class="container" v-if="carts.length">
      <div class="row justify-content-center">
        <div class="col bg-white py-5" style="min-height: calc(100vh - 81px - 81px);">
          <div class="d-flex justify-content-center">
            <h2 class="text-dark mb-0 font-weight-bold">購物車</h2>
          </div>
          <hr class="border-dark mb-0" style="border-width:1.5px">
          <div class="table-responsive">
            <table class="table table-striped mb-0">
              <thead class="text-center">
                <td>產品圖片</td>
                <td>產品名稱</td>
                <td>數量</td>
                <td>價格</td>
                <td>刪除</td>
              </thead>
              <tbody>
                <tr v-for="item in carts" :key="item.product.id + 1">
                  <td class="text-center px-0" style="width:100px">
                    <img :src="item.product.imageUrl[0]"
                  alt="" style="height: 100px; object-fit: cover;"></td>
                  <td class="align-middle text-center" style="min-width:100px">
                    {{ item.product.title }}
                  </td>
                  <td class="align-middle text-center" style="min-width:125px">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <button class="btn btn-primary btn-sm  d-flex align-items-center"
                        type="button" :disabled="item.quantity === 1"
                        @click="item.quantity --;
                        updateQuantity( item.product.id, item.quantity)">
                        <span v-if="status.loadingUpdateCart === item.product.id"
                        class="spinner-border spinner-border-sm" style="width:12px;height:12px">
                        </span>
                        <span v-else>-</span>
                        </button>
                      </div>
                      <input min="1" type="number" class="form-control text-center"
                      v-model="item.quantity"
                      @keyup="updateQuantity(item.product.id, item.quantity)"
                      :disabled="item.quantity === 1">
                      <div class="input-group-append">
                        <button class="btn btn-primary btn-sm d-flex align-items-center"
                        type="button"
                        @click="item.quantity ++;
                        updateQuantity( item.product.id, item.quantity)"
                        :disabled="status.loadingUpdateCart === item.product.id">
                        <span v-if="status.loadingUpdateCart === item.product.id"
                        class="spinner-border spinner-border-sm" style="width:12px;height:12px">
                        </span>
                        <span v-else>+</span>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-center">
                    {{ item.product.price * item.quantity | money}}
                  </td>
                  <td class="align-middle text-center" >
                    <a
                      class="text-danger"
                      href="#"
                      @click.prevent="deleteCartItem(item.product.id)"
                    >
                      <i class="fas fa-trash-alt"></i>
                      移除
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="container">
            <div class="d-flex justify-content-end mt-4"  v-if="cartTotal > 0">
              <p class="mb-0 h4 font-weight-bold" style="min-width:80px">總金額</p>
              <p class="mb-0 h4 font-weight-bold">{{cartTotal | money}}</p>
            </div>
          </div>
          <div class="row d-flex justify-content-between mt-4">
            <div class="col-md-2">
              <router-link class="btn btn-outline-dark btn-block"
              to="/products">
              繼續選購
              </router-link>
            </div>
            <div class="col-md-2 mt-3 mt-md-0">
              <router-link class="btn btn-outline-primary btn-block"
              to="/cart-message">
              下一步
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="row flex-column justify-content-center align-items-center">
        <div class="col bg-white pt-5">
          <div class="d-flex justify-content-center">
            <h2 class="text-dark mb-0 font-weight-bold">購物車</h2>
          </div>
          <hr class="border-dark mb-0" style="border-width:1.5px">
          <div class="d-flex justify-content-center">
            <p class="h3 text-dark mt-3">購物車無商品，快去逛逛！</p>
          </div>
        </div>
        <div class="col-md-5">
          <img class="img-fluid mt-3"
        src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nOoInzZIltvbLPKRcHKMFc3zyqrQyBWAGRaN9ke6zVSP9LaMndr8ta41GVAAZhKyOJ4apHZjHwuPv7sgyA96GoF4cXLSSXip7puDq1JRXK7Z7wdr8kIdnwMKU7XvB2tc.jpg" alt="">
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-3 mb-5">
        <div class="col-md-2">
          <router-link class="btn btn-outline-dark btn-block"
          to="/products">
          繼續選購
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      carts: [],
      cartTotal: 0,
      isLoading: false,
      status: {
        loadingUpdateCart: ''
      }
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getCart () {
      this.isLoading = true
      const getCartListApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http
        .get(getCartListApi)
        .then(res => {
          this.isLoading = false
          this.status.loadingUpdateCart = ''
          this.carts = res.data.data
          this.totalPriceHandler()
        })
        .catch(err => {
          console.log(err)
          this.isLoading = false
          this.status.loadingItem = ''
        })
    },
    totalPriceHandler () {
      let total = 0
      this.carts.forEach(item => {
        total += item.product.price * item.product.quantity
      })
      this.cartTotal = total
    },
    quantityHandler (id, quantity = 1) {
      this.status.loadingUpdateCart = id
      const getCartListApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
      this.$http
        .get(getCartListApi, cart)
        .than(res => {
          this.status.loadingUpdateCart = ''
          this.getCart()
          this.$bus
            .$emit(
              'message:push',
              '商品數量更新成功!',
              'success'
            )
        })
        .catch(err => {
          console.log(err)
          this.status.loadingUpdateCart = ''
          this.$bus
            .$emit(
              'message:push',
              '商品數量更新失敗!',
              'danger'
            )
        })
    },
    deleteProdsHandler (id) {
      this.isLoading = true
      const deleteProdsApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http
        .delete(deleteProdsApi)
        .then(res => {
          this.isLoading = false
          this.getCart()
          this.$bus
            .$emit('get-cart')
          this.$bus
            .$emit(
              'message:push',
              '商品已刪除!',
              'success'
            )
        })
        .catch(() => {
          this.isLoading = false
          this.$bus
            .$emit(
              'message:push',
              '商品刪除失敗!',
              'danger')
        })
    }
  }
}
</script>
