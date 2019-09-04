const state = {
  funds: 10000,
  stocks: [],
};

const getters = {
  // communication between modules
  // PAY ATTENTION ON GETTERS.
  // I inject getters here to get access to stocks from stocks module.
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      // call "stocks" getter from "stocks" module.
      const record = getters.stocks.find(element => element.id === stock.id);

      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      }
    });
  },
  funds() {
    return state.funds;
  }
};

const mutations = {
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id === stockId);
    if(record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({ id: stockId, quantity });
    }

    state.funds -= stockPrice * quantity;
  },

  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id === stockId);
    if(record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }

    state.funds += stockPrice * quantity;
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
}