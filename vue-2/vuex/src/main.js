import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

import { STORE } from './store/store'

new Vue({
  el: '#app',
  store: STORE,
  render: h => h(App)
})
