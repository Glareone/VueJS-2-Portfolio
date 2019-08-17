<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
  </div>
</template>

<script>
  export default {
    // we defined properties like array with names. This elements from array should be defined from outside.
    // We defined name in User component (parent component).
    props: ['name']
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
