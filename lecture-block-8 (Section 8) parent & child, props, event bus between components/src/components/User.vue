<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>name: {{ myName }}</p>
    <p>Age: {{ age }} (As you can see - this age will not be changed because it doesn't listen the event bus as UserDetail do)</p>
    <button @click="changeName">Change my name!</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!--
            Here we bind name property from User component and pass it to user-detail component.
          Pay attention. if we will write name="name" - it will not work, we will set up string "name", not name from model.
          That's why we need to use v-bind: or :


            Naming: we could use myName or my-name. Case sensitive "myName" we could use if we it supports:
            1) Single file template (Best solution)
            2) Compiled templates to javascript.
          otherwise better to use insensitive names: "name", "myname", "surname" and so on.
          we can't use "sur-name":"sur-name" as I showed below.

            Pay attention on nameWasReset. It is an emit event which will be called from the child.
          $event - is a default parameter

            We bind here a reset function using : (v-bind) and use it in userDetail.

            userAge - firstExample how to provide data between sibling using parent
        -->
        <app-user-detail
            :myName="myName"
            :sur-name="sur-name"
            @nameWasReset="myName = $event"
            :resetFunction="resetName"
            :userAge="age"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <!--
          We're trying several options how to organize communication between siblings.
          1) using $emit and custom event which was declared in UserEdit component.
          2) using callback approach which was used in resetFunction example (little bit upper and below).
        -->
        <app-user-edit
            :userAge="age"
            @ageWasEdited="age = $event"
        />
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
        myName: 'Alex',
        'sur-name': 'Glareone',
        age: 30
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    },
    methods: {
      changeName() {
        this.myName = 'Max'
      },
      resetName() {
        this.myName = 'Default Name from reset Method in parent';
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
