import Vue from 'vue'
import Vuex from 'vuex'

import axios from './axios-auth'
import globalAxios from 'axios'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, user) {
      state.idToken = user.token;
      state.userId = user.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    setLogoutTimer({commit}, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData');
      }, expirationTime * 1000);
    },
    signup({commit, dispatch}, authData) {
      return new Promise((resolve, reject) => {
        axios
        .post('/accounts:signUp?key=AIzaSyBHI193SsA2iVNzOCMRBHaUBOhU1M1j-C4', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then((res) => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const tokenExpirationDate = new Date(now.getTime() + (res.data.expiresIn * 1000));
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('expiresIn', tokenExpirationDate);
          localStorage.setItem('userId', res.data.localId);
          dispatch('createUser', authData).then((result) => {
            console.log('Eject createUser', result);
            dispatch('setLogoutTimer', res.data.expiresIn);
            resolve('User signed and created');
          }).catch(err => {
            reject(err);
          });
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    },
    login({commit, dispatch}, authData) {
      return new Promise((resolve, reject) => {
        axios
        .post("/accounts:signInWithPassword?key=AIzaSyBHI193SsA2iVNzOCMRBHaUBOhU1M1j-C4", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((res) => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const tokenExpirationDate = new Date(now.getTime() + (res.data.expiresIn * 1000));
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('tokenExpirationDate', tokenExpirationDate);
          localStorage.setItem('userId', res.data.localId);
          dispatch('setLogoutTimer', res.data.expiresIn);
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject(err)
        });
      });
    },
    tryAutoLogin({commit}) {
      const token = localStorage.getItem('token');
      if (!token) {
        return
      }
      const tokenExpirationDate = localStorage.getItem('tokenExpirationDate');
      const now = new Date();
      if (now >= tokenExpirationDate) {
        return
      }
      const userId = localStorage.getItem('userId');
      commit('authUser', {
        token: token,
        userId: userId
      });
    },
    logout({commit}) {
      commit('clearAuthData');
      localStorage.clear();
      router.replace('/signin');
    },
    createUser({state}, user) {
      return new Promise((resolve, reject) => {
        if (!state.idToken) {
          reject('You are not authorized');
        } else {
          globalAxios.post('/users.json' + '?auth=' + state.idToken, user).then(res => {
            console.log('User created', res);
            resolve('User created');
          }).catch(err => {
            console.log(err);
            reject(err);
          });
        }
      });
    },
    fetchUser({commit, state}) {
      return new Promise((resolve, reject) => {
        if (!state.idToken) {
          reject('You are not authorized');
        } else {
          globalAxios.get('/users.json' + '?auth=' + state.idToken).then(res => {
            let users = [];
            for (const key in res.data) {
              if (res.data.hasOwnProperty(key)) {
                let user = res.data[key];
                user.id = key;
                users.push(user);
              }
            }
            console.log(users);
            commit('storeUser', users[0]);
            resolve(users);
          }).catch(err => {
            console.log(err);
            reject(err);
          });
        }
      });
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
})