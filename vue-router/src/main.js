import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import { ROUTES } from './routes'

// Plugins
Vue.use(VueRouter)

// Configuración VueRouter
const ROUTER = new VueRouter({
  routes: ROUTES,
  mode: 'history', // sin # (hash)
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    
    return {
      x: 0,
      y: 0
    };
  }
})

// Guard global: se ejecuta siempre
ROUTER.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  // Definición 1: continúa la ejecución del enrutamiento
  next();
  // Definición 2: le paso una ruta (path)
  // next('/');
  // Definición 3: le paso un boolano para que aborte o continúe
  // next(false);
})

new Vue({
  el: '#app',
  router: ROUTER,
  render: h => h(App)
})
