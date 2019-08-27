<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <p>Loaded Id: {{ userId }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to Homepage</button>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        // $route, not $router. Active route. But this is incorrect.
        // If we will have 2 buttons with /user/1 and user/2, id on a page will be 1 (or 2, depends on which page was first).
        // Non-reactive. That's why we need to add watcher on the route changes.
        //id: this.$route.params.id,

        // instead of watch you could use router-props. take a look on routes.js props below.
        //id: this.$route.params.userId,
      }
    },
    watch: {
      //'$route'(to, from) {
        //this.id = to.params.id; // to - is a new route which is loaded.
      //},
    },
    methods: {
      navigateToHome() {
        // $ sign to get access to some stuff from root vuejs (described better in lecture-block 14).
        // simple example: this.$router.push('/');
        // instead of watch you could use router-props. take a look on routes.js
        this.$router.push({ path: '/' }); // we could use parameters in such case.
      }
    },
    props: {
      // instead of watch you could use router-props. take a look on routes.js props below.
      //id: this.$route.params.userId,
      userId: String
    }
  }
</script>

<style>

</style>