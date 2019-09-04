// here we will store generic actions which influence on entire store (for example load data affect stocks and
// portfolio)
import Vue from 'vue';

export const loadData = ({ commit }) => {
  // without $ sign because we call http directly
  Vue.http.get('data.json').then(response => response.json())
     .then(extractedData => {
       if(data) {
         const stocks = data.stocks;
         const funds = data.funds;
         const stockPortfolio = data.stockPortfolio;

         const portfolio = {
           stockPortfolio,
           funds,
         };

         commit('SET_STOCKS', stocks);
         commit('SET_PORTFOLIO', portfolio);
       }
     });
};