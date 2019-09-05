<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p v-for="user in users">Your id: {{ user.id }}, Your email address: {{ user.email }}</p>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        users: [],
      };
    },
    created() {
      // other part in baseUrl
      axios.get('/users.json')
        .then(res => {
          console.log(res);
          this.users = Object.keys(res.data).map(key => ({
            id: key,
            email: res.data[key].email,
          }));
        })
        .catch(error => console.log(error));
    },
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>