import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import vuelidate from 'vuelidate';

import router from './router'
import store from './store'

Vue.use(vuelidate);

axios.defaults.baseURL = 'https://vuejs-auth-978c4.firebaseio.com/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
