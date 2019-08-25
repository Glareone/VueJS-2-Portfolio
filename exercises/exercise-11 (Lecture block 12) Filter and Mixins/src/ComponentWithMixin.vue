<template>
  <div>
    <hr>
    <input type="text" v-model="componentTestText">
    <p>Original text: {{ componentTestText }}</p>
    <p>Reversed text: {{ componentTestText | reverseText }}</p>
    <p>Computed text(reversed): {{ reversedText }}</p>
    <p>Computed text(counter): {{ counter }}</p>
  </div>
</template>

<script>
  import { mixin } from './mixins';

  export default {
    name: 'ComponentWithMixin',
    data() {
      return {
        componentTestText: 'component text which will be used in mixin',
      }
    },
    mixins: [mixin]
  }
</script>

<style scoped>

</style>