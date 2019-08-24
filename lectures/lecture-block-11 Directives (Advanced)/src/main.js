import Vue from 'vue'
import App from './App.vue'

// CUSTOM DIRECTIVE
// Will be bound in app.vue
Vue.directive('highlight', {
    bind(el, binding, vnode) { // gives us access to the bind element
      // el.style.backgroundColor = 'green'; //style here is a normal JS property to which we have an access
      el.style.backgroundColor = binding.value; // binding value will be used to set up the color  v-highlight="'green'"
    }
});

// custom directive which could be used by v-highlight2
Vue.directive('highlight2', {
  bind(el, binding, vnode) { // gives us access to the bind element
    if(binding.arg === 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value; // otherwise set up the text color
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
