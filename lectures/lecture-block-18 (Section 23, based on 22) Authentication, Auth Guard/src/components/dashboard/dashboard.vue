<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p v-for="user in users">Your id: {{ user.id }}, Your email address: {{ user.email }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      users() {
        return this.$store.getters.users;
      }
    },
    created() {
      this.$store.dispatch('fetchUsers');
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