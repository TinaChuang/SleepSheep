<template>
  <div class="container-fluid py-3 px-5 d-flex flex-column align-items-center">
    <loading :active.sync="isLoading"/>
    <h4>訂單管理</h4>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead class="text-center">
          <tr>
            <th>下單時間</th>
            <th>購買品項</th>
            <th>付款方式</th>
            <th>應付金額</th>
            <th>是否付款</th>
          </tr>
        </thead>
        <tbody class="text-center" v-if="orders.length">
          <tr v-for="(item, i) in orders" :key="i + 1">
            <td scope="row" class="align-middle">{{ item.created.datetime }}</td>
            <td class="d-flex flex-column justify-content-center">
              <span class="" v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} <span class="text-muted">x{{ product.quantity }}
                <!-- {{ product.product.unit }} --></span>
              </span>
            </td>
            <td class="align-middle">{{ item.payment }}</td>
            <td class="align-middle">{{ item.amount | money }}</td>
            <td class="align-middle">
              <div class="custom-control custom-switch">
                <input :id="item.id" v-model="item.paid" @change="PaymentStatusHandler(item.id)"
                type="checkbox" class="custom-control-input">
                <label class="custom-control-label" :for="item.id">
                <strong v-if="item.paid" class="text-success">已付款</strong>
                <span v-else class="text-muted">未付款</span>
                </label>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody class="text-center" v-else>
          <tr>
            <td colspan="5">
              目前無訂單
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <Pagination
        class="mt-3"
        v-if="pagination.count"
        :pages="pagination"
        @update="getOrders"
      />
    </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      orders: {
        user: {}
      },
      isLoading: false,
      pagination: {}
    }
  },
  props: ['token'],
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      const getOrdersApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders?page=${page}`
      this.$http
        .get(getOrdersApi)
        .then(res => {
          this.isLoading = false
          this.orders = res.data.data
          this.pagination = res.data.meta.pagination
          console.log(this.orders)
        })
        .catch(err => {
          this.isLoading = false
          console.log(err)
          alert('訂單資料載入失敗！請稍後再試！')
        })
    },
    PaymentStatusHandler (id) {
      console.log(id)
    }
  }
}
</script>
