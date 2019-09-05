<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        email: '',
      };
    },
    created() {
      axios.get('https://vuejs-axios-e9a2c.firebaseio.com/users.json')
        .then(res => {
          console.log(res);
          const users = Object.keys(res.data).map(key => ({
            id: key,
            email: res.data[key].email,
          }));
          
          this.email = users[0].email;
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