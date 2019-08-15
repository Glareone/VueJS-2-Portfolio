import Vue from 'vue';
import App from './App.vue';
import Home from './Home';

// Global registration for Home component
Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
});
