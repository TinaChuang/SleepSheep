import Vue from 'vue'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'

// vee-validate
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  localize,
  extend
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zhTW from 'vee-validate/dist/locale/zh_TW.json'

// moneyFilter
import moneyFilter from './filters/money'

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Bus
import './bus'

window.$ = $
Vue.config.productionTip = false

// 套件加入倒 Vue 的藍圖內(原型內)
Vue.use(VueAxios, axios)

// 元件，全域註冊
Vue.component('Loading', Loading)

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

localize('tw', zhTW)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

// fortawesome
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// 價錢 格式化
Vue.filter('money', moneyFilter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
