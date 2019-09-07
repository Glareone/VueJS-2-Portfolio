import Vue from 'vue'
import Vuex from 'vuex'

import axiosInstance from './axios-auth (axios-instance)';
import axios from 'axios';

import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    users: [],
  },
  getters: {
    users(state) {
      return state.users;
    },
    isAuthenticated(state) {
      return !!state.idToken;
    }
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUsers(state, users) {
      state.users = users;
    },
    clearAuthUser(state) {
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    // Auto logout function:
    setLogoutTimer({ dispatch }, expirationTime) {
      setTimeout(() => { dispatch('logout'); }, expirationTime * 1000 /* because of ms */);
    },

    // pay attention on dispatch method here. This is how we could call one method from another.
    signUp({ commit, dispatch }, userData) {
      const authData = { email: userData.email, password: userData.password, returnSecureToken: true };

      axiosInstance.post('/accounts:signUp?key=AIzaSyCOMzxMfs0gbqbsG6lq5BBawxrvaq457HI', authData)
                   .then(res => {
                     console.log(res);
                     commit('authUser', { token: res.data.idToken, userId: res.data.localId });

                     localStorage.setItem('userId', res.data.localId);
                     localStorage.setItem('token', res.data.idToken);

                     // let's store the date when we signUp (expiresIn contains 3600s, not a date. We need to calculate a date).
                     let now = new Date();
                     const signUpDate = new Date(now.getTime() + res.data.expiresIn * 1000);
                     localStorage.setItem('expirationDate', signUpDate);

                     // save new user for dashboard
                     dispatch('storeUser', userData);
                     // set Autologout with timer (depends on token expiration time, 3600 by default from firebase)
                     dispatch('setLogoutTimer', res.data.expiresIn);
                   })
                   .catch(error => console.log(error));
    },

    // pay attention on dispatch method here. This is how we could call one method from another.
    login({ commit, dispatch }, userData) {
      const authData = { email: userData.email, password: userData.password, returnSecureToken: true };

      axiosInstance.post('/accounts:signInWithPassword?key=AIzaSyCOMzxMfs0gbqbsG6lq5BBawxrvaq457HI', authData)
                   .then(res => {
                     console.log(res);
                     commit('authUser', { token: res.data.idToken, userId: res.data.localId });

                     localStorage.setItem('userId', res.data.localId);
                     localStorage.setItem('token', res.data.idToken);

                     let now = new Date();
                     const loginDate = new Date(now.getTime() + res.data.expiresIn * 1000);
                     localStorage.setItem('expirationDate', loginDate);

                     // set Autologout with timer (depends on token expiration time, 3600 by default from firebase)
                     dispatch('setLogoutTimer', res.data.expiresIn);
                   })
                   .catch(error => console.log(error));
    },

    tryAutoLogin({ commit }) {
      const token = localStorage.getItem('token');
      if(!token) {
        return;
      }

      const expirationDate = localStorage.getItem('expirationDate');
      const now = new Date();

      if(now >= expirationDate) {
        // token is expired
        return;
      }

      // if token still valid - login
      const userId = localStorage.getItem('userId');
      commit('authUser', { token, userId });
    },

    // We will use this method after authentication to add this user to our firebase database.
    // pay attention on state here.
    // we could use data from store inside this method.
    storeUser({ commit, state }, user) {
      if(!state.idToken) {
        return;
      }
      // default axios instance is used.
      axios.post(`/users.json?auth=${state.idToken}`, user)
           .then(res => {
             console.log(res);
           })
           .catch(error => console.log(error));
    },
    fetchUsers({ commit, state }) {
      if(!state.idToken) {
        return;
      }
      // default axios instance is used.
      // other part in baseUrl
      axios.get(`/users.json?auth=${state.idToken}`)
           .then(res => {
             console.log(res);
             const users = Object.keys(res.data).map(key => ({
               id: key,
               email: res.data[key].email,
             }));

             commit('storeUsers', users);
           })
           .catch(error => console.log(error));
    },
    logout({ commit }) {
      commit('clearAuthUser');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expirationDate');
      router.replace('/');
    }
  }
})