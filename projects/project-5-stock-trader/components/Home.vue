<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>Save & Load your data</h6>
    <h6>Click on 'End day' to begin new day</h6>
    <hr>
    <p>Your Funds: {{ funds }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
</script>

<style scoped>

</style>