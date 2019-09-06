import Vue from 'vue'
import Vuex from 'vuex'

// instead of using the global axios we will use dedicated axios instance
// uses in auth methods
import axiosInstance from './axios-auth (axios-instance)';
import axios from 'axios';

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
    }
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    // pay attention on dispatch method here. This is how we could call one method from another.
    signUp({ commit, dispatch }, userData) {
      // proper url to firebase auth server (email + password authentication).
      // key comes from firebase configuration:
      // https://console.firebase.google.com/u/0/project/vuejs-auth-978c4/settings/general/
      // info about auth methods in firebase could be found here:
      // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
      const authData = { email: userData.email, password: userData.password, returnSecureToken: true };

      axiosInstance.post('/accounts:signUp?key=AIzaSyCOMzxMfs0gbqbsG6lq5BBawxrvaq457HI', authData)
                   .then(res => {
                     console.log(res);
                     commit('authUser', { token: res.data.idToken, userId: res.data.localId });
                     dispatch('storeUser', userData);
                   })
                   .catch(error => console.log(error));
    },

    login({ commit }, userData) {
      const authData = { email: userData.email, password: userData.password, returnSecureToken: true };

      axiosInstance.post('/accounts:signInWithPassword?key=AIzaSyCOMzxMfs0gbqbsG6lq5BBawxrvaq457HI', authData)
                   .then(res => {
                     console.log(res);
                     commit('authUser', { token: res.data.idToken, userId: res.data.localId });
                   })
                   .catch(error => console.log(error));
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
    }
  }
})