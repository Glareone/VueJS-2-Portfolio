import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';

new Vue({
  el: '#app',
  store, // store registration in root component.
  render: h => h(App)
});
