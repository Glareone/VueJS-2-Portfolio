import Vue from 'vue';
import App from './App.vue';

export const eventBusUpdateServerStatus = new Vue({
  methods: {
    updateServerStatus(id, status) {
      this.$emit('updateServerStatus', { id, status });
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
