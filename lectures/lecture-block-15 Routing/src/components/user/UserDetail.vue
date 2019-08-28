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
     -->
    <router-link class="btn" tag="button" :to="{ name: 'userEdit', params: { id: $route.params.id } }">
      Edit User
    </router-link>
  </div>
</template>