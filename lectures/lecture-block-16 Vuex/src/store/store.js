import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    // global value
     value: 0,
  },
  // getters, which could be used to make similar calculations with one piece of data for multiple components
  // reserved name. Could replace computed values in components.
  getters: {
    doubleCounter: (state) => {
      return state.counter * 2;
    },
    stringCounter: (state) => {
      return `${state.counter} Clicks`;
    },
    value: (state) => state.value
  },
  // mutations is a couple of methods which could be used to change the data in storage.
  // runs only synchronously.
  // payload is an optional parameter. Could be an object to provide multiple values at once.
  mutations: {
    increment: (state, payload) => {
      if (payload) {
        state.counter += payload;
      } else {
        state.counter++;
      }
    },
    decrement: (state, payload) => {
      if (payload) {
        state.counter -= payload;
      } else {
        state.counter--;
      }
    },
    updateValue: (state, payload) => state.value = payload,
  },
  // actions could be async.
  // payload is an optional parameter. Could be an object to provide multiple values at once.
  actions: {
    incrementAction: (/*context is a first parameter here. payload - optional parameter*/{ commit }, payload) => {
      // calls mutation. mutation is still a sync method.
      commit('increment');
      // commit('increment', payload); - example with payload.
    },
    decrementAction: (/*context is a parameter here*/{ commit }) => {
      // calls mutation. mutation is still a sync method.
      commit('decrement');
    },
    // async examples. payload is provided from anotherCounter.
    // pay attention on es6 method's style.
    asyncIncrementAction({ commit }, payload) {
      setTimeout(() => {
        commit('increment', payload.value);
      }, payload.duration);
    },
    asyncDecrementAction({ commit }, payload) {
      setTimeout(() => {
        commit('decrement', payload.value);
      }, payload.duration);
    },
    updateValueAction({ commit }, payload) {
      commit('updateValue', payload);
    }
  }
});