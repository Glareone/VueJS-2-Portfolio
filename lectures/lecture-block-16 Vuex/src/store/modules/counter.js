// Module for counter:

// importing namespace
import * as types from '../types';

const state = {
  counter: 0,
};

// getters, which could be used to make similar calculations with one piece of data for multiple components
// reserved name. Could replace computed values in components.
const getters = {
  // this is how to use dynamic names (js will replace this name in runtime).
  // we also need to rename getters in places where we use them!
  [types.DOUBLE_COUNTER]: (state) => {
    return state.counter * 2;
  },
  // also could be stringCounter:
  // stringCounter: (state) => {
  [types.CLICK_COUNTER]: (state) => {
    return `${state.counter} Clicks`;
  },
};

// mutations is a couple of methods which could be used to change the data in storage.
// runs only synchronously.
// payload is an optional parameter. Could be an object to provide multiple values at once.
const mutations = {
  // without providing payload, the second argument will be mouse event
  increment: (state, payload) => {
    if (Number.isInteger(payload)) {
      state.counter += payload;
    } else {
      state.counter++;
    }
  },
  decrement: (state, payload) => {
    // without providing payload, the second argument will be mouse event
    if (Number.isInteger(payload)) {
      state.counter -= payload;
    } else {
      state.counter--;
    }
  },
};

// actions could be async.
// payload is an optional parameter. Could be an object to provide multiple values at once.
const actions = {
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};