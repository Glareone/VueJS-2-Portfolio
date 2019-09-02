import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  // getters, which could be used to make similar calculations with one piece of data for multiple components
  getters: {

  }
});