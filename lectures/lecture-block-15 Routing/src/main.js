import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes.js';

// all routes in routes.js
Vue.use(VueRouter);

// mode history means the url without hash tag.
// 'hash' or without anything -> http://localhost:8080/#/user
// 'history' -> http://localhost:8080/user
// more info: https://router.vuejs.org/ru/guide/essentials/history-mode.html
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) { // means  scrolling to hash-tag: http://localhost:8080/user/2/edit?locale=en&q=100#data
    if (to.hash) {
      // if hash exists in url
      return { selector: to.hash };
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
