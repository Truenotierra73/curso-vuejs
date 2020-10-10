import Vue from 'vue'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

Vue.use(VueResource)

// Configuraciones de vue-resource
Vue.http.options.root = 'https://vuejs-http-91ea8.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => {
      return {
        messages: response.body
      }
    }
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
