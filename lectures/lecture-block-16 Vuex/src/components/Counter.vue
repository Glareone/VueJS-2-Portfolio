<template>
  <div>
    <button @click="increment" class="btn btn-primary">Increment</button>
    <button @click="decrement" class="btn btn-primary">Decrement</button>
  </div>
</template>

<script>
  export default {
    methods: {
      increment() {
        // store (vuex store) from a global object (root to be precise).
        this.$store.state.counter++;
      },
      decrement() {
        this.$store.state.counter--;
      }
    }
  }
</script>