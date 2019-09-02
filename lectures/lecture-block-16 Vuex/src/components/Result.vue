<template>
  <div>
    <p>Number of clicks (getter): {{ clicks }}</p>
    <p>Counter (using computed + vue store value) is: {{ counter }}</p>
  </div>
</template>

<script>
  export default {
   computed: {
     counter() {
       // we should do it if we don't have getters in our store.
       // return this.$store.state.counter * 2;
       return this.$store.getters.doubleCounter;
     },
     clicks() {
       return this.$store.getters.stringCounter;
     }
   }
  }
</script>