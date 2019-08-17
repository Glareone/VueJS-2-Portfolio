<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ myName }}</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Name: {{ surName }}</p>
  </div>
</template>

<script>
  export default {
    // we defined properties like array with names. This elements from array should be defined from outside.
    // We defined name in User component (parent component).
    props: ['myName', 'surName'],
    methods: {
      // this method also will be called after changing myName. And switchName() result will be up to date.
      switchName() {
        return this.myName.split('').reverse().join('');
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
