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
        this.$emit('updated', 1);
      },
      decrement() {
        this.$emit('updated', -1);
      }
    }
  }
</script>