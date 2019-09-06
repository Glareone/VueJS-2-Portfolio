import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import router from './router'
import store from './store'

// no need to use Vue.use() with axios
axios.defaults.baseURL = 'https://vuejs-auth-978c4.firebaseio.com/';
// default headers.
// common will apply to any requests no matter which type(get, post, put) they are.

// also take a look on "axios-auth" instance (axios auth file) to understand how to create dedicated axios instance to
// split which headers should be attached (for example).
axios.defaults.headers.common['Authorization'] = 'token';
// only for get requests. could check it in network.
axios.defaults.headers.get['something'] = 'something';

// example of interceptors:
const requestInterceptor = axios.interceptors.request.use((configuration) => {
  console.log('request interceptor');
  configuration.headers.common['Authorization'] = 'token2';
  // here you should return configuration. otherwise you will block the request
  return configuration;
});

const responseInterceptor = axios.interceptors.response.use((response) => {
  console.log('response interceptor');
  // also you should return the response. Otherwise any request won't get a response.
  return response;
});

// removing interceptors. To remove them you need Id of interceptors.
// that's why you have to store interceptors in const
axios.interceptors.response.eject(responseInterceptor);
axios.interceptors.request.eject(requestInterceptor);
// after eject you will not see console.log and interceptor's changes in http calls.

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
