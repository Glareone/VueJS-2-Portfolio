import Vue from 'vue'
import App from './App.vue'

// EVENT BUS.
// 1) we could not describe any methods because $emit exists by default in VueJS.
// 2) but for example we will demonstrate one thing.
// We could wrap our change method directly in event bus.

// Pay attention! We need to put our vue instance before app vue instance initialization.
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited_2', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});

