<template>
  <div>
    <p>Please select a User</p>
    <hr>
    <ul class="list-group">
      <!--
        also replacing li items with router-link + tag="li".
        you could also make "to" dynamic using :to and v-for, for example.
      -->
      <router-link
          tag="li"
          class="list-group-item"
          style="cursor: pointer"
          to="/user/1"
      >
        User 1
      </router-link>
      <router-link
          tag="li"
          class="list-group-item"
          style="cursor: pointer"
          to="/user/2"
      >
        User 2
      </router-link>
      <router-link
          tag="li"
          class="list-group-item"
          style="cursor: pointer"
          to="/user/3"
      >
        User 3
      </router-link>
    </ul>
  </div>
</template>