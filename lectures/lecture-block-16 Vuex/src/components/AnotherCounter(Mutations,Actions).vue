<template>
  <div>
    <p>Another Counter component:</p>
    <button @click="increment" class="btn btn-primary">Increment (mapMutations)</button>
    <button @click="decrement" class="btn btn-primary">Decrement (mapMutations)</button>
    <br><br>
    <!--  With payload parameter.  -->
    <button
        @click="incrementAction"
        class="btn btn-primary">Increment(mapActions without payload)
    </button>
    <button
        @click="decrementAction"
        class="btn btn-primary">Decrement(mapActions without payload)
    </button>
    <br><br>
    <button
        @click="asyncIncrementAction({ value: 1, duration: 500 })"
        class="btn btn-primary">Increment (mapActions with payload)
    </button>
    <button
        @click="asyncDecrementAction({ value: 1, duration: 500 })"
        class="btn btn-primary">Decrement (mapActions with payload)
    </button>
  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex';

  export default {
    // using mutations directly via importing them from store and spreading here
    // (spread for our possibilities to add some our own methods except mutations, take a look on example in AnotherResult)
    methods: {
      ...mapMutations([
        'increment',
        'decrement'
      ]),
      ...mapActions([
        'incrementAction',
        'decrementAction',
        'asyncIncrementAction',
        'asyncDecrementAction'
      ]),
      // To describe what mapActions do behind the scene:
      // PAY ATTENTION: we could use optional parameter "payload" also with mapActions.
      // It provides this param automatically.
      // Could be an object to provide multiple values at once.

      // incrementAction(payload /* is optional parameter. "How much it should be increased? By 5, for example" */ ) {
      // this.$store.dispatch('incrementAction', payload);
      // }

    }
  }
</script>