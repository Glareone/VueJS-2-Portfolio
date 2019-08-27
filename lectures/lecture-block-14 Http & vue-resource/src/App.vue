<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="username">UserName</label>
          <input type="text" id="username" class="form-control" v-model="user.userName">
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="text" id="email" class="form-control" v-model="user.email">
        </div>
        <div class="btn btn-primary" @click="submit">Submit</div>
        <hr>
        <!-- input to change "node" in resource-->
        <input type="text" class="form-control" v-model="node">
        <br><br>
        <button class="btn-primary" @click="fetchData">Get Data</button>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users">{{user.userName}} | {{ user.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          userName: '',
          email: '',
        },
        users: [],
        resource: {}, // for vue-resource (vue-resource could be used not like vue-http).
        node: 'data' // for vue-resource route.
      }
    },
    methods: {
      submit() {
        //  0) We have already registered VueResource globally. that's why we have opportunities to use $http in any instances
        // .json is necessary for firebase. MongoDB is under the hood. (right now it is empty, url was moved to main.js)
        //  url is registered in "root" key in options (take a look on main.js).
        //  1) if you need to add /sendData - place it here. otherwise - empty string (if we don't use vue-resource in created() hook, only vue-resource (http) which configured in main.js)
        //
        //  Using direct $http call:
        //  this.$http.post('', this.user)
        //   .then(response => {
        //     console.log(response);
        //   }, error => {
        //     console.log(error);
        //   });

        // Using default vue-resources:
        // https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md
        // 1st argument - parameters.
        //this.resource.save({}, this.user); // using default vue-resources which stores to this variable.

        // Using custom vue-resource which declared on created()
        this.resource.saveAlt(this.user);
      },
      fetchData() {
        // url is registered in "root" key in options (take a look on main.js).
        // empty string (if we don't use vue-resource in created() hook, only vue-resource (http) which configured in main.js)
        // 2) right now 'data.json' - because we configured vue-resource in created() hook.
        // this is the example of how to use http directly without using vue-resource (using this.resource as we use it submit).
        // this.$http.get('data.json')
        //     .then(response => {
        //       return response.json(); // deserialize from body to object. but it still returns promise. that's why we need the third then.
        //     }).then(data => {
        //   this.users = Object.keys(data).map(element => ({
        //     userName: data[element].userName,
        //     email: data[element].email,
        //   }));
        // });

        // getData uses the default url (as you can see here: getData: { method: 'GET', })
        // but here we could specify node which we use in uri template below in created(): (this.$resource('{node}.json', {}, customActions);)
        this.resource.getData({ node: this.node })
            .then(response => {
              return response.json(); // deserialize from body to object. but it still returns promise. that's why we need the third then.
            }).then(data => {
          this.users = Object.keys(data).map(element => ({
            userName: data[element].userName,
            email: data[element].email,
          }));
        });
      },
    },
    created() {
      // we will use it to initialize vue-resource concept
      // also a $ sign. $ - all resources which come from VUEJS ROOT (http is also comes from ROOT and we have access to it via $
      // (no reason to use $ sign globally, for example in mmain.js)).

      // data.json was it http.root configuration
      // .json is necessary for firebase. MongoDB is under the hood. (right now it is empty, url was moved to main.js)

      // custom resource creation. adding is below:
      const customActions = {
        saveAlt: { method: 'POST', url: 'alternative.json' },
        getData: { method: 'GET', }
      };

      // default resources
      // Using vue-resources:
      // https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md
      // this.resource = this.$resource('data.json');

      // with adding custom resources to default:
      // this.resource = this.$resource('data.json', {}, customActions);

      // to make more flexible we could add parameter instead of data.json. Let's name it node:
      // https://medialize.github.io/URI.js/uri-template.html
      this.resource = this.$resource('{node}.json', {}, customActions);
    }
  }
</script>

<style>
</style>
