<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result/>
        <hr>
        <app-another-result/>
        <hr>
        <app-counter/>
        <hr>
        <app-another-counter/>
        <hr>
        <!-- value is a computed value (which use getters inside it) --->
        <p>Example how to bind input to vuex:</p>
        <input type="text" v-model="value" >
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter(Direct-Property-Change,Store-Commit).vue';
  import AnotherCounter from './components/AnotherCounter(Mutations,Actions).vue';
  import Result from './components/Result(Computed+Store-Getters).vue';
  import AnotherResult from './components/AnotherResult(mapGetters).vue';

  export default {
    // to bind input to vuex
    computed: {
      // pay attention on how value is declared (not like a function).
      value: {
        get() {
          return this.$store.getters.value;
        },
        set(value) { // SETTER INSIDE COMPUTED VALUE
          this.$store.dispatch('updateValueAction', value);
        }
      },
    },
    components: {
      appCounter: Counter,
      appAnotherCounter: AnotherCounter,
      appResult: Result,
      appAnotherResult: AnotherResult,
    }
  }
</script>

