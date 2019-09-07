import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import router from './router'
import store from './store'

// no need to use Vue.use() with axios
axios.defaults.baseURL = 'https://vuejs-auth-978c4.firebaseio.com/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
