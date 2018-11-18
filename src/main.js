import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueAMap from 'vue-amap'
import './assets/style/index.css'

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'ba1e516a5fe553b193403a1e306db2e3'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
