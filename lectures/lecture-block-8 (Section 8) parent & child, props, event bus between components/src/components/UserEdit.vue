<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age (Communication between children):</button>
  </div>
</template>

<script>
  import { eventBus } from '../main'; // import eventBus from main.

  export default {
    props: ['userAge'],
    methods: {
      editAge() {
        this.userAge += 5;
        // 1) first way how to provide data from between siblings (through the parent). Age is from parent. We have to use $emit again
        //this.$emit('ageWasEdited', this.userAge);

        // 2) using callback approach which was used in resetFunction example (take a look to a resetFunction).

        // 3) using event bus (using $emit)
        // this data will no longer emitted in our UserEdit instance (like we did in 1st example), but will be emitted in eventBus instance.
        eventBus.$emit('ageWasEdited', this.userAge);

        // 4) using event bus method
        eventBus.changeAge(this.userAge);
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
