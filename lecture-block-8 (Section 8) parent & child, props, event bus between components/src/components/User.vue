<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name!</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!--
          Here we bind name property from User component and pass it to user-detail component.
          Pay attention. if we will write name="name" - it will not work, we will set up string "name", not name from model.
          That's why we need to use v-bind: or :
         -->
        <app-user-detail :name="name" />
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit />
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data: function() {
      return {
        name: 'Alex'
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    },
    methods: {
      changeName() {
        this.name = 'Max'
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
