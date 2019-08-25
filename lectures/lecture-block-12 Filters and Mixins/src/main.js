import Vue from 'vue'
import App from './App.vue'

// Filter which is registered globally
Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

// We could register mixin globally.
// it is not for any production application. It could be used for Vuejs plugins for example. (when you need to ship your data from plugin to your application)
// because such kind of mixins (global mixins) will be added to every vuejs component doesn't matter do we use them in components or not.
Vue.mixin({
  created() {
    console.log('Global mixin is created'); // this message will be raised three times (2 components + new Vue here):
    // new Vue here. Then App.vue will be. Then List.vue component.
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
