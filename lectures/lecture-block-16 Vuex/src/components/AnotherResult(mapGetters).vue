<template>
  <div>
    <p>Another Result component:</p>
    <p>Number of clicks (getter): {{ stringCounter }}</p>
    <p>Counter (using computed + vue store value) is: {{ doubleCounter }}</p>
  </div>
</template>

<script>
  // instead of using computed value on every kind of interactions with getters we could use another way:
  import { mapGetters } from 'vuex';
  // import namespaces for vuex.
  import * as types from '../store/types';

  export default {
    // you also could use object assign:
    // mapGetters({ doubleCounterNewName: 'doubleCounter', stringCounter2: 'stringCounter' })
    // computed: mapGetters([
    //   'doubleCounter',
    //   'stringCounter',
    // ])

    // to mix mapGetters with our own computed values - we need to use spread:
    // computed: {
    //   ...mapGetters([
    //     'doubleCounter',
    //     'stringCounter',
    //   ]),
    //   ourOwnComputedProperties() {
    //     return this.$store.state.counter;
    //   }
    // }

    // example how to use namespaces with mapGetters:
    // Pay attention: we could use object inside mapGetters instead of array of names.
    computed: {
      ...mapGetters({
        doubleCounter: types.DOUBLE_COUNTER,
        stringCounter: types.CLICK_COUNTER,
      })
    }
  }
</script>