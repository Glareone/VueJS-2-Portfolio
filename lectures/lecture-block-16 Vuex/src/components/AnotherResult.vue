<template>
  <div>
    <p>Number of clicks (getter): {{ stringCounter }}</p>
    <p>Counter (using computed + vue store value) is: {{ doubleCounter }}</p>
  </div>
</template>

<script>
  // instead of using computed value on every kind of interactions with getters we could use another way:
  import { mapGetters } from 'vuex';

  export default {
    // you also could use object assign:
    // mapGetters({ doubleCounterNewName: 'doubleCounter', stringCounter2: 'stringCounter' })
    // computed: mapGetters([
    //   'doubleCounter',
    //   'stringCounter',
    // ])

    // to mix mapGetters with our own computed values - we need to use spread:
    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter',
      ]),
      ourOwnComputedProperties() {
        return this.$store.state.counter;
      }
    }
  }
</script>