<template>
  <div>
    <p>Result component:</p>
    <p>Number of clicks (getter): {{ clicks }}</p>
    <p>Counter (using computed + vue store value) is: {{ counter }}</p>
  </div>
</template>

<script>
  import * as types from '../store/types';

  export default {
   computed: {
     counter() {
       // we should do it if we don't have getters in our store.
       // return this.$store.state.counter * 2;

       // default example without namespace:
       //return this.$store.getters.doubleCounter;

       // with using namespace:
       return this.$store.getters[types.DOUBLE_COUNTER];
     },
     clicks() {
       // default example without namespace:
       //return this.$store.getters.stringCounter;

       // with namespace:
       return this.$store.getters[types.CLICK_COUNTER];
     }
   }
  }
</script>