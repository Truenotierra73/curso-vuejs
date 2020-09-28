import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import { ROUTES } from './routes'
import STORE from './store/store'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

// Config VueRouter
Vue.use(VueRouter)
const ROUTER = new VueRouter({
  mode: 'history',
  routes: ROUTES
})

// Config VueResource
Vue.use(VueResource)
Vue.http.options.root = 'https://vue-stock-trader-2cd3a.firebaseio.com/'

// Filtros
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

new Vue({
  el: '#app',
  router: ROUTER,
  store: STORE,
  render: h => h(App)
})
