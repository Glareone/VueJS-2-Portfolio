import Vue from 'vue'
import Vuex from 'vuex'

// instead of using the global axios we will use dedicated axios instance
import axiosInstance from './axios-auth (axios-instance)';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    signUp({ commit }, userData) {
      // proper url to firebase auth server (email + password authentication).
      // key comes from firebase configuration:
      // https://console.firebase.google.com/u/0/project/vuejs-auth-978c4/settings/general/
      // info about auth methods in firebase could be found here:
      // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
      const authData = { email: userData.email, password: userData.password, returnSecureToken: true };

      axiosInstance.post('/accounts:signUp?key=AIzaSyCOMzxMfs0gbqbsG6lq5BBawxrvaq457HI', authData)
                   .then(res => console.log(res))
                   .catch(error => console.log(error));
    },

    login({ commit }, userData) {
      const authData = { email: userData.email, password: userData.password, returnSecureToken: true };

      axiosInstance.post('/accounts:signInWithPassword?key=AIzaSyCOMzxMfs0gbqbsG6lq5BBawxrvaq457HI', authData)
                   .then(res => console.log(res))
                   .catch(error => console.log(error));
    }
  }
})