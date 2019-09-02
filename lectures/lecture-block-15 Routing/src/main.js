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
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      // if hash exists in url
      return { selector: to.hash };
    }
    return { x:0, y: 0};
  }
});

// we could access router after declaring it.
// GUARD example (does user have permissions to route to some pages or doesn't)
// here you could use only very generic checks. To make for specific checks - you could follow to routes.js (beforeEnter).
router.beforeEach((to, from, next) => {
  console.log('global router beforeEach');
  next(); // to allow next route without parameters.
  // next(false); // to abort next operation.
  // also you could pass a '/someroute' or { params, path }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
