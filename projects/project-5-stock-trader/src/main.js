import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import { routes } from './routes';
import store from '../store/store';

Vue.use(VueResource);
Vue.use(VueRouter);

// configuring access to our firebase storage:
Vue.http.options.root = 'https://vuejs-stock-trader-backe-b9662.firebaseio.com/';

// global filter declaration
Vue.filter('currency', (value) => {
  return `$ ${value.toLocaleString()}`
});

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  store, // vuex
  render: h => h(App)
});
