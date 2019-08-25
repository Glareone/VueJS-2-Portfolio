<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <input type="text" v-model="testText">
        <p>Original text: {{ testText }}</p>
        <p>Reversed text via filter: {{ testText | reverseText }}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>Global filter: {{ testText | counter }}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>Reversed text using computed prop: {{ reversedText }} </p>
        <p>Counter  using computed prop: {{ counter }}</p>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p>Component with Mixin:</p>
        <components-with-mixin />
      </div>
    </div>
  </div>
</template>

<script>
  import ComponentWithMixin from './ComponentWithMixin.vue';

  export default {
    data() {
      return {
        testText: ''
      }
    },
    filters: {
      reverseText(text) {
        return [...text].reverse().join('');
      }
    },
    computed: {
      reversedText() {
        return [...this.testText].reverse().join('');
      },
      counter() {
        return `${this.testText} (${this.testText.length})`;
      }
    },
    components: {
      componentsWithMixin: ComponentWithMixin,
    }
  }
</script>

<style>
</style>
