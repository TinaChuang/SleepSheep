import Vue from 'vue'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'

// moneyFilter
import moneyFilter from './filters/money'

// Bus
import './bus'

window.$ = $
Vue.config.productionTip = false

// 套件加入倒 Vue 的藍圖內(原型內)
Vue.use(VueAxios, axios)

// 元件，全域註冊
Vue.component('Loading', Loading)

Vue.filter('money', moneyFilter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
