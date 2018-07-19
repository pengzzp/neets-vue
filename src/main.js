//assets：资源目录
//components：组件目录
//views：为页面级组件目录

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import store from './store/'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
