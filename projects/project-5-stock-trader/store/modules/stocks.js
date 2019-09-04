import StocksData from '../../dummyData/stocks';

const state = {
  stocks: [],
};

const getters = {
  stocks(state) {
    return state.stocks;
  }
};

const mutations = {
  // something between pure naming and namespaces from constants.
  'SET_STOCKS'(state, payload) {
    state.stocks = payload;
  },
  'RANDOM_STOCKS'(state) {

  }
};

const actions = {
  buyStock({ commit }, order) {
    // communication between modules
    // BUY_STOCK is located in a different module but will work.
    commit('BUY_STOCK', order);
  },
  initStocks({ commit }) {
    commit('SET_STOCKS', StocksData);
  },
  randomizeStocks: ({ commit }) => {
    commit('RANDOM_STOCK');
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};

