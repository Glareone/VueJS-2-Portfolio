<template>
  <div> <!-- one major thing - we should have only one sibling in template. Not several. --->
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        status: 'Critical'
      }
    },
    methods: {
      changeStatus() { // ES6 function declaration
        this.status = 'Normal';
      }
    }
  }
</script>

<style scoped>

</style>
