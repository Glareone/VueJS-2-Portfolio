<template>
  <div>
    <p>Counter component:</p>
    <button @click="increment" class="btn btn-primary">Increment</button>
    <button @click="decrement" class="btn btn-primary">Decrement</button>
  </div>
</template>

<script>
  export default {
    methods: {
      increment() {
        // store (vuex store) from a global object (root to be precise).
        // this is how to use mutations:
        this.$store.commit('increment');
      },
      decrement() {
        // mutate data directly through changing property in store's state.
        this.$store.state.counter--;
        // mutation example
        //this.$store.commit('decrease');
      }
    }
  }
</script>