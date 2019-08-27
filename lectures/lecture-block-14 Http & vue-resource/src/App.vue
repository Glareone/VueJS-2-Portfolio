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
      }
    },
    methods: {
      submit() {
        // We have already registered VueResource globally. that's why we have opportunities to use $http in any instances
        // .json is necessary for firebase. MongoDB is under the hood.
        this.$http.post('https://vuejs-backend-40bce.firebaseio.com/data.json', this.user)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      },
      fetchData() {
        this.$http.get('https://vuejs-backend-40bce.firebaseio.com/data.json')
          .then(response => {
            return response.json(); // deserialize from body to object. but it still returns promise. that's why we need the third then.
          }).then(data => {
              this.users =  Object.keys(data).map(element => ({
                userName: data[element].userName,
                email: data[element].email,
            }));
        });
      },
    }
  }
</script>

<style>
</style>
