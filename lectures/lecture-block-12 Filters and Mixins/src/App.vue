<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!--
          Pay attention on a pipe | here. It is the same with angular2. We need to use it in modify text using our filter.
          Filter does not change the original data. It creates a new instance.
         -->
        <p>{{  text | toUppercase }}</p>
        <p>Filter pipeline:</p>
        <!-- To lowercase is registered globally. Here could you see how to use chain (pipeline) -->
        <p>{{  text | toUppercase | to-lowercase }}</p>
        <hr>
        <p>The best alternative for filters is - computed values</p>
        <!--
          We can't use filter with v-for because Vue doesn't know when something changed and tries to rerun filter on every re-render.
          Huge performance price will be.
          Instead of this we could use array on filteredFruits which is calculated value based on filteredText from input.
        -->
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Hello world!',
        fruits: ['Apple', 'Banana', 'Melon', 'Mango'],
        filterText: '',
      }
    },
    // Pay attention. Here we register our filters locally and could use it also only locally
    // We could register it globally like we did with directives for example
    filters: {
      // value here is a data which we would like to transform. value here is a 'text' from {{  text | toUppercase }}
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter((fruit) => {
          return fruit.match(this.filterText);
        });
      }
    }
  }
</script>

<style>

</style>
