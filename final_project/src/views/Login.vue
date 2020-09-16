<template>
<div class="container">
  <loading :active.sync="isLoading"></loading>
  <div
    class="row justify-content-center align-items-center"
    style="min-height: 100vh;">
    <div class="col-md-5">
      <div class="h4 text-center">管理者登入</div>
      <form @submit.prevent="signIn">
        <div class="form-group mt-4">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="請輸入電子郵件地址"
            v-model="user.email" autofocus
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="請輸入密碼"
            v-model="user.password"
          />
        </div>
        <div class="d-flex justify-content-center mt-4">
          <router-link to="/products" class="btn btn-outline-dark">返回賣場</router-link>
          <button type="submit" class="btn btn-dark ml-3" :disabled="isLoading">登入</button>
        </div>
        <p class="mt-4 text-muted text-center">管理後台</p>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      token: '',
      isLoading: false
    }
  },
  methods: {
    signIn () {
      this.isLoading = true
    }
  }
}
</script>

<style>

</style>
