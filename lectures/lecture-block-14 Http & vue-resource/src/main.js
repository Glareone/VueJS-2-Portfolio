import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

// through using we could attach side-packages OR plugins.
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
});
