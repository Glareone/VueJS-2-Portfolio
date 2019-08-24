import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {

}); // custom directive which could be used by v-highlight

new Vue({
  el: '#app',
  render: h => h(App)
});
