import Vue from 'vue';
import Vuex from 'vuex';
import counterStore from './modules/counter';
import * as valueActions from './actions';

Vue.use(Vuex);

// Store now have the module construction.
// Take a look in modules folder and modules property here:
export const store = new Vuex.Store({
  state: {
    // global value
     value: 0,
  },
  // getters, which could be used to make similar calculations with one piece of data for multiple components
  // reserved name. Could replace computed values in components.
  getters: {
    value: (state) => state.value
  },
  // mutations is a couple of methods which could be used to change the data in storage.
  // runs only synchronously.
  // payload is an optional parameter. Could be an object to provide multiple values at once.
  mutations: {
    updateValue: (state, payload) => state.value = payload,
  },
  // actions could be async.
  // payload is an optional parameter. Could be an object to provide multiple values at once.
  // value actions was moved to actions.js. We could place all other things like this.
  actions: valueActions,
  // PAY ATTENTION ON MODULES:
  modules: {
    counter: counterStore,
  }
});