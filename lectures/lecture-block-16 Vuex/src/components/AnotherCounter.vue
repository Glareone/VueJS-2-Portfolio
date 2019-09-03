<template>
  <div>
    <p>Another Counter component:</p>
    <button @click="increment" class="btn btn-primary">Increment</button>
    <button @click="decrement" class="btn btn-primary">Decrement</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    // using mutations via importing them from store and spreading here
    // (spread for our possibilities to add some our own methods except mutations)
    methods: {
      ...mapMutations([
        'increment',
        'decrement'
      ]),
    }
  }
</script>