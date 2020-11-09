import { defineAsyncComponent } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachRegistration from './pages/coaches/CoachRegistration.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
// import RequestsReceived from './pages/requests/RequestsReceived.vue';
// import Login from './pages/login/Login.vue';
// import NotFound from './pages/NotFound.vue';

import store from './store/index.js';

// Carga perezosa de las rutas
const CoachDetail = defineAsyncComponent(() =>
  import('./pages/coaches/CoachDetail.vue')
);
const CoachRegistration = defineAsyncComponent(() =>
  import('./pages/coaches/CoachRegistration.vue')
);
const ContactCoach = defineAsyncComponent(() =>
  import('./pages/requests/ContactCoach.vue')
);
const RequestsReceived = defineAsyncComponent(() =>
  import('./pages/requests/RequestsReceived.vue')
);
const Login = defineAsyncComponent(() =>
  import('./pages/login/Login.vue')
);
const NotFound = defineAsyncComponent(() =>
  import('./pages/NotFound.vue')
);

const ROUTER = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: CoachesList
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCoach
        } // /coaches/c1/contact
      ]
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        requiresUnauth: true
      }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

ROUTER.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default ROUTER;
