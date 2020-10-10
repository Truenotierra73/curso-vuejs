import Vue from 'vue'
import App from './App.vue'

// Filtro global
Vue.filter('toLowercase', function (value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
