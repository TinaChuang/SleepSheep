<template>
  <div class="container-fluid py-3 px-5">
    <loading :active.sync="isLoading" />
    <h4>商品管理列表</h4>
    <div class="row justify-content-center">
      <div class="col-12 text-right">
        <button
          type="button"
          class="btn btn-dark"
          @click="openModal('new')"
        >
          建立新的產品
        </button>
      </div>
      <div class="col-12 my-2">
        <div class="table-responsive">
          <table class="table table-striped text-center">
            <thead>
              <tr>
                <th>分類</th>
                <th>眠綿羊圖片</th>
                <th>眠綿羊名稱</th>
                <th>原價</th>
                <th>售價</th>
                <th>是否上架</th>
                <th>編輯</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(prod) in products"
                :key="prod.id"
              >
                <td class="align-middle">{{prod.category}}</td>
                <td class="align-middle">
                  <img style="max-width: 80px;" :src="prod.imageUrl[0]" :alt="prod.title">
                </td>
                <td class="align-middle">{{prod.title}}</td>
                <td class="align-middle">{{prod.origin_price}}</td>
                <td class="align-middle">{{prod.price}}</td>
                <td class="align-middle">{{prod.enabled}}</td>
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="openModal('edit', prod)"
                  >
                    編輯
                  </button>
                </td>
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="openModal('delete', prod)"
                  >
                    刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <pagination class="mt-3" :pages="pagination" @update="getProducts" />
    </div>
    <!-- Modal -->
    <!-- new productModal -->
    <div
      id="productModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
              <div class="modal-header bg-primary">
              <h5 class="modal-title text-white font-weight-bold" id="exampleModalLabel">新增產品</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              </div>
              <form>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-lg-4">
                      <div v-for="i in 5" :key="'img'+ i" class="form-group">
                        <label for="'img' + i">請輸入圖片網址</label>
                        <input :id="'img' + i" v-model="tempProduct.imageUrl[i - 1]"
                        type="text" placeholder="請輸入圖片連結">
                      </div>
                      <div class="form-group">
                        <label for="customFile">
                        或 上傳圖片
                        <img v-if="status.fileUploading" style="width: 20px;" src="https://www.intogif.com/resource/image/loading/spin.gif" alt="">
                        </label>
                        <input id="customFile" ref="file" type="file" class="form-control"
                        @change="uploadFile">
                      </div>
                      <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt />
                    </div>
                    <div class="col-lg-8">
                        <div class="form-row">
                          <div class="col-md-12 mb-3">
                            <label for="productTitle">產品名稱</label>
                            <input type="text" class="form-control" id="productTitle"
                            v-model="tempProduct.title"  placeholder="請輸入產品名稱">
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="col-md-6 mb-3">
                            <label for="productCategory">產品分類</label>
                            <input type="text" class="form-control" id="productCategory"
                            v-model="tempProduct.category"  placeholder="請輸入產品分類">
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="productUnit">單位</label>
                            <input id="productUnit" v-model="tempProduct.unit" type="unit"
                            class="form-control" placeholder="請輸入單位">
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="col-md-6 mb-3">
                            <label for="productOriginPrice">原價</label>
                            <input type="number" class="form-control" id="productOriginPrice"
                            v-model="tempProduct.origin_price" placeholder="請輸入原價">
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="productPrice">售價</label>
                            <input id="productPrice" v-model="tempProduct.price" type="number"
                            class="form-control" placeholder="請輸入售價">
                          </div>
                        </div>
                        <hr>
                        <div class="form-row">
                          <div class="col-md-12 mb-6">
                              <label for="productContent">眠綿羊簡述</label>
                              <textarea type="text" class="form-control" id="productContent"
                              v-model="tempProduct.content" placeholder="請輸入產品說明">
                              </textarea>
                          </div>
                          <div class="col-md-12 mb-6">
                              <label for="productDescription">詳細資訊</label>
                              <textarea type="text" class="form-control" id="productDescription"
                              v-model="tempProduct.description" placeholder="請輸入產品產品資訊">
                              </textarea>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value=""
                            id="invalidCheck2" v-model="tempProduct.enabled">
                            <label class="form-check-label" for="invalidCheck2">
                            是否上架
                            </label>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-primary" @click="updateProduct">{{isNew? "新增": "儲存"}}</button>
                </div>
              </form>
          </div>
        </div>
    </div>
    <!-- deleteModal -->
    <div id="deleteModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header bg-danger">
              <h5 class="modal-title text-white font-weight-bold" id="exampleModalLabel">刪除產品</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>是否刪除商品&nbsp;<strong class="text-danger">{{ tempProduct.title }}</strong>&nbsp;
              （注意！商品刪除則無法復原）</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger" @click="deleteProduct">確認刪除</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: [],
        options: {}
      },
      isNew: false, /* prod是否為新增 */
      isLoading: false,
      status: { /* 上傳圖片時的狀態 */
        fileUploading: false
      }
    }
  },
  props: ['token'],
  mounted () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const getProductsApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`
      this.$http
        .get(getProductsApi)
        .then(res => {
          this.isLoading = false
          this.products = res.data.data
          this.pagination = res.data.meta.pagination
        })
        .catch(err => {
          console.log(err)
        })
    },
    openModal (isNew, product) {
      switch (isNew) {
        case 'new':
          this.isNew = true
          $('#productModal').modal('show')
          break
        case 'edit':
          this.isNew = false
          this.getOneProduct(product.id)
          break
        case 'delete':
          this.isNew = false
          this.tempProduct = { ...product }
          $('#deleteModal').modal('show')
          break
        default:
          this.isLoading = false
          break
      }
    },
    getOneProduct (id) {
      this.isLoading = true
      const getOneProdApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`
      this.$http
        .get(getOneProdApi)
        .then(res => {
          this.isLoading = false
          this.tempProduct = res.data.data
          $('#productModal').modal('show')
        })
        .catch(err => {
          this.isLoading = false
          console.log(err)
          alert('無法取得資料！請稍後再試！')
        })
    },
    updateProduct () {
      this.isLoading = true
      let editProductApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product`
      let httpMethod
      if (this.isNew) {
        httpMethod = 'post'
      } else {
        editProductApi += `/${this.tempProduct.id}`
        httpMethod = 'patch'
      }
      this.$http[httpMethod](editProductApi, this.tempProduct)
        .then(res => {
          this.isLoading = false
          $('#productModal').modal('hide')
          this.getProducts()
        })
        .catch(err => {
          console.log(err)
          alert('產品更新失敗！請稍後再試！')
        })
    },
    uploadFile () {
      this.isLoading = true
      const uploadedfile = document.querySelector('#customFile').files[0]
      const fileInput = document.querySelector('#customFile')
      const formData = new FormData()
      formData.append('file', uploadedfile)
      const storageApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage`
      this.status.fileUploading = true
      this.$http
        .post(storageApi, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(res => {
          console.log('$htp post: ', res)
          this.isLoading = false
          this.status.fileUploading = false
          if (res.status === 200) {
            this.tempProduct.imageUrl.push(res.data.data.path)
          }
          fileInput.value = ''
          alert('圖片上傳成功！')
        })
        .catch(err => {
          console.log(err.response)
          this.isLoading = false
          this.status.fileUploading = false
          alert('圖片上傳失敗！') /* 檔案請勿超過 2MB */
        })
    },
    deleteProduct () {
      this.isLoading = true
      const destroyProductApi = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`
      this.$http
        .delete(destroyProductApi)
        .then(res => {
          $('#deleteModal').modal('hide')
          this.getProducts()
        })
        .catch(err => {
          $('#deleteModal').modal('hide')
          alert(err)
        })
    }
  }
}
</script>
