// Loading Routes Eagerly (Carga inmediata - EAGER)
import Home from './components/Home.vue';
import Header from './components/Header.vue';
// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';

// Loading Routes Lazily (Carga perezosa - LAZY)
const User = () => import(/*webpackChunkName: 'user' */ './components/user/User.vue')
const UserStart = () => import(/*webpackChunkName: 'user' */ './components/user/UserStart.vue')
const UserDetail = () => import(/*webpackChunkName: 'user' */ './components/user/UserDetail.vue')
const UserEdit = () => import(/*webpackChunkName: 'user' */ './components/user/UserEdit.vue')
// const User = resolve => {
//     require.ensure(['./components/user/User.vue'], () => {
//         resolve(require('./components/user/User.vue'));
//     }, 'user'); // ----> Agregando este nombre, crea un solo archivo build.js. Agrupa varios componentes dentro de un mismo archivo.
// };

// const UserStart = resolve => {
//     require.ensure(['./components/user/UserStart.vue'], () => {
//         resolve(require('./components/user/UserStart.vue'));
//     }, 'user');
// };

// const UserDetail = resolve => {
//     require.ensure(['./components/user/UserDetail.vue'], () => {
//         resolve(require('./components/user/UserDetail.vue'));
//     }, 'user');
// };

// const UserEdit = resolve => {
//     require.ensure(['./components/user/UserEdit.vue'], () => {
//         resolve(require('./components/user/UserEdit.vue'));
//     }, 'user');
// };

export const ROUTES = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header
        }
        // component: Home
    },
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
        // component: User,
        children: [
            {
                path: '',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail,
                beforeEnter: (to, from, next) => {
                    console.log('inside route setup');
                    next();
                }
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit'
            },
        ]
    },
    {
        path: '/redirect-me',
        // redirect: '/user'
        redirect: {
            name: 'home'
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];