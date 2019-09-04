// here we will store generic actions which influence on entire store (for example load data affect stocks and
// portfolio)
import Vue from 'vue';

export const loadData = ({ commit }) => {
  // without $ sign because we call http directly
  Vue.http.get('data.json').then(response => response.json())
     .then(extractedData => {
       if(extractedData) {
         const stocks = extractedData.stocks;

         const portfolio = {
           stockPortfolio: extractedData.stockPortfolio,
           funds: extractedData.funds,
         };

         commit('SET_STOCKS', stocks);
         commit('SET_PORTFOLIO', portfolio);
       }
     });
};