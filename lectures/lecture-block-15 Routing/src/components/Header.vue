<template>
  <ul class="nav nav-pills">
    <!--
  router-link instead of a, because router works better with his own router-links (a will ask a request from a server).
  router-link will be replaced with anchor tag by vuejs (you could inspect it via browser).
 -->
    <!-- default style with li + router-link. But we could use router-link without li using 'tag'.
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    -->

    <!--
      Pay attention on tag. it means that this element will be transformed to li by Vuejs.
      Why we did it? Because we want to style these buttons by active state based on current route.
      We can't do it with li elements instead of router-link on the top.
      <a> tag needs because we want to style Home and User text.

      active-class - class which adds to router-link when current route is url.

      with to="/" and to="/user" both of these routes will be active one time because both of them have / in their routes.
      it's correct and good behavior when you have a tree-structured routing (to highlight upper leaf (root) unit with your current route).
      "exact" - full path match to avoid this problem.
      
    -->
      <router-link class="nav-link" to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
      <router-link class="nav-link" to="/user" tag="li" active-class="active"><a>User</a></router-link>
  </ul>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>

</style>