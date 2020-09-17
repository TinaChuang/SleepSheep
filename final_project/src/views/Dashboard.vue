<template>
<div id="app">
  <Navbar />
  <router-view :token="token" v-if="checkSuccess"/>
  <Footer />
</div>
</template>

<script>
import Navbar from '@/components/BackendNavbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  created () {
    this.checkToken()
  },
  methods: {
    checkToken () {
      const checkTokenApi = `${process.env.VUE_APP_APIPATH}/auth/check`
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexHWToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      this.$http
        .post(checkTokenApi, {
          api_token: this.token
        })
        .then(res => {
          console.log(res.data.message)
          this.checkSuccess = true
        })
        .catch(err => {
          alert(err)
          this.$router.push('/login')
        })
    }
  }
}
</script>
