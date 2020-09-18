<template>
  <div>
    <loading :active.sync="isLoading"/>
    <div class="my-3">
      <div class="container">
        <div class="row justify-content-center flex-md-row">
          <div class="col-md-7">
            <div v-if="order.paid === false">
              <div class="d-flex">
                <h4 class="text-dark mb-0 font-weight-bold">結帳</h4>
              </div>
              <hr class="border-dark" style="border-width:1.5px">
              <p>
                只差一步了！點選確認付款以完成訂單。<br>我們將在收到您的訂單後，約 1 ~ 3 個工作天會有專人聯絡您協助預備眠綿羊的生活環境與送達時間！
              </p>
              <img class="img-fluid w-100" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Dry9BIAASb4giKnaoSNHtSk3l5GPx4a6lcxAxtoWM9GekuI7w9wUWmb53XFkhg1WWY9rBIPobkNvyGtttxQzHfU1zKpAyZvzJLo4g4XfFQODfneK8E2tGIquXnH9rAcK.jpg" alt="">
            </div>
            <div v-else>
              <div class="d-flex">
                <h4 class="text-dark mb-0 font-weight-bold">訂單完成</h4>
              </div>
              <hr class="border-dark" style="border-width:1.5px">
              <p>
                感謝您的購買！<br>您的訂單， 將在 1 ~ 3 個工作天會有專人聯絡您協助預備眠綿羊的生活環境與送達時間！
              </p>
              <img class="img-fluid w-100" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/XFsNBRYyHjMUY5h4K5HRSIVfW93b3jhcmYFm8SLrgOvf9FA4dphwFwYTb4e7hN9hUdD3M0CJvwoROmbZqwbc8y6H1epIqNe9uzMOUp0aLgst9h4ijvb1HT2QppKrNUNY.jpg" alt="">
            </div>
          </div>
          <div class="col-md-5 mt-3">
            <div class="border p-4">
              <h4 class="font-weight-bold mb-3">訂單明細</h4>
              <div v-for="( product, i ) in order.products" :key="i">
                <div class="d-flex mb-3">
                  <img :src="product.product.imageUrl[0]" alt="" class="mr-2"
                  style="width: 60px; object-fit: cover">
                  <div class="w-100">
                    <div class="d-flex justify-content-between font-weight-bold">
                      <p class="mb-0">{{ product.product.title }}</p>
                      <p class="mb-0">X {{ product.quantity }}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                      <small class="mb-0 text-muted">
                        {{ product.product.price | money }} / {{ product.product.unit }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <table class="table mt-4 border-top border-bottom text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 pb-0 font-weight-normal">電子郵件</th>
                    <td class="text-right border-0 px-0 pt-4 pb-0">{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 font-weight-normal">收件人姓名</th>
                    <td class="text-right border-0 px-0">{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人電話</th>
                    <td class="text-right border-0 px-0 pt-0">{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人地址</th>
                    <td class="text-right border-0 px-0 pt-0">{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </table>
              <table class="table mt-4 text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 pb-0 font-weight-normal">付款金額</th>
                    <td class="text-right border-0 px-0 pt-4 pb-0">{{ order.amount | money}}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 font-weight-normal">付款方式</th>
                    <td class="text-right border-0 px-0">{{ order.payment }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">付款狀態</th>
                    <td
                      class="text-right border-0 px-0 pt-0 text-danger"
                      v-if="!order.paid"
                    >
                      尚未付款
                    </td>
                    <td
                      class="text-right border-0 px-0 pt-0 text-success font-weight-bold"
                      v-else
                    >
                      付款完成
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr v-if="order.paid === false">
            <div class="row justify-content-end">
              <div class="col-md-6">
                <div v-if="order.paid === false">
                  <a
                    class="btn btn-primary d-flex align-items-center justify-content-center"
                    @click.prevent="payOrder"
                    :disabled="loadingItem"
                  >
                    確認付款
                  <span
                    class="spinner-grow spinner-grow-sm ml-2"
                    v-if="loadingItem"
                  >
                  </span>
                  </a>
                </div>
              </div>
            </div>
            </div>
            <div class="d-flex my-3">
              <router-link
                class="flex-fill btn btn-outline-secondary mx-1"
                to="/products"
              >
                繼續選購
              </router-link>
              <a
                class="flex-fill btn btn-outline-secondary mx-1"
                @click.prevent="backHome"
              >
                回到首頁
              </a>
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
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false,
      loadingItem: false
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.data
          this.isLoading = false
        })
        .catch(() => {
          this.$bus
            .$emit(
              'message:push',
              '無法取得資料！請稍後再試！',
              'danger'
            )
          this.isLoading = false
        })
    },
    payOrder () {
      const payingApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`
      this.loadingItem = true
      this.$http
        .post(payingApi)
        .then((res) => {
          if (res.data.data.paid) {
            this.getOrder()
          }
          this.$bus
            .$emit(
              'message:push',
              '已完成付款！',
              'success'
            )
          this.loadingItem = false
        })
        .catch(() => {
          this.$bus
            .$emit(
              'message:push',
              '付款失敗！請再試一次！',
              'danger'
            )
          this.loadingItem = false
        })
    },
    backHome () {
      this.$router.push('/')
      this.$bus
        .$emit(
          'message:push',
          '尚未付款！訂單已放棄，請重新下單。',
          'danger'
        )
    }
  }
}
</script>

<style>

</style>
