<template>
  <div>
    <h3>Some User Details</h3>
    <!-- don't need to watch on route changes (or using props, for example) because we recreate instance of this
      component every time and route is up to date. (instead of situation which was in User component
      (take a look on comments, on watch, on props; also on comments in routes.js)
      -->
    <p>User Loaded has ID: {{ $route.params.id }}</p>
    <br>
    <!--
      default way how to create router-link. also we could use named routes. Naming routed in routes.js.
      params also ability to provide some props to page.

      <router-link class="btn" tag="button" :to="`/user/${$route.params.id}/edit`">

      query - query parameters in object..

      hash - hash fragments on a page which declares about some topics. We could navigate through them.
      Default browser behavior. it works via url. But without additional configuration it doesn't work with routing using buttons(to open this page).
      hash-tag: http://localhost:8080/user/2/edit?locale=en&q=100#data
      take a look on main.js
     -->
    <router-link
        class="btn"
        tag="button"
        :to="{ name: link.name, params: link.params, query: link.query, hash: link.hash }"
    >
      Edit User
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: this.$route.params.id,
          },
          query: {
            locale: 'en',
            q: 100,
          },
          hash: '#data'
        }
      }
    },
    // router lifecycle hook. GUARD.

    beforeRouteEnter(to, from, next) {
      // if(user.authenticated) { next(); } else { next(false) } // for example.
      // also you could use next to redirect to another page.
      next(); // also without it this page will not be loaded.
      // You can't access to your data.
      // this.link will not work because instance will not be created.

      // PAY ATTENTION.
      // Don't have access to this inside. only using next callback.
      // If you want to take an access to data of this component - you could do next:
      // next(vm => {
      //  vm.link; // here your component
      // });
      console.log('user detail page: beforeRouteEnter');
    }
  }
</script>