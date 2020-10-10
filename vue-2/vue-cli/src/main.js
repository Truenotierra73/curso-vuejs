import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// Global component
Vue.component('app-server', Home);

new Vue({
  el: '#app',
  render: h => h(App)
});
