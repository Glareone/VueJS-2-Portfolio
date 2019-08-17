<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age (Communication between children):</button>
  </div>
</template>

<script>
  export default {
    props: ['userAge'],
    methods: {
      editAge() {
        this.userAge += 5;
        // 1) first way how to provide data from between siblings (through the parent). Age is from parent. We have to use $emit again
        this.$emit('ageWasEdited', this.userAge);
        // 2) using callback approach which was used in resetFunction example (take a look to a resetFunction).
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
