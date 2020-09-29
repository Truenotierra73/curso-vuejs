import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios'

axios.defaults.baseURL = 'https://vue-axios-2e0d7.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'asdasdasd'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('request interceptor', config)
  return config
})

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('response interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
