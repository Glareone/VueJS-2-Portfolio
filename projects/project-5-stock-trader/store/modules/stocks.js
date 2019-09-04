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
  // recalculate stocks prices after endDay function.
  'RANDOM_STOCKS'(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.46));
    });
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
    commit('RANDOM_STOCKS');
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};

