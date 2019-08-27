import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

// through using we could attach side-packages OR plugins.
Vue.use(VueResource);

// without $ sign. $ sign is needed to access from vue instance.
// When you access it from the global - no needs to use $http.
// about options - take a look on  vue-resource readme on github.
// you could also use .header for content-type.

// .json is necessary for firebase. MongoDB is under the hood. (right now it is empty, url was moved to main.js)
// data.json was moved to app.vue created (to vue-resource configuration).
Vue.http.options.root = 'https://vuejs-backend-40bce.firebaseio.com/';

// it is an array of interceptors.
// We need it if we want to intercept the request on send step or response step.
// Example of intercepting request.
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  // the difference between post and put for FIREBASE:
  // POST adds new value to others which already exist.
  // PUT overrides all and stores only the last insert.
  if(request.method === 'POST') {
    request.method = 'PUT';
  }

  // next is a callback for the next function in interceptors array and also allow us to continue to work with our
  // response or request. next();

  // if we want to intercept the response - we could do the next:
  // we stores our body in another object (because PUT method and POST methods has different type of storing data in
  // MongoDB).
  next(response => {
    response.json = () => {
      return {
        messages: response.body
      };
    }
  })
});

new Vue({
  el: '#app',
  render: h => h(App)
});
