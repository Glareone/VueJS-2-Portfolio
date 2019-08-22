<template>
  <div class="row">
    <!-- native modifier tells VUE to use this click like native browser event inside real element:
      https://ru.vuejs.org/v2/guide/components-custom-events.html
     -->
    <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
  </div>
</template>

<script>
  import quote from './Quote.vue';

  export default {
    name: 'QuoteGrid',
    props: ['quotes'],
    components: {
      appQuote: quote
    },
    methods: {
      deleteQuote(index) {
        this.$emit('quoteDeleted', index);
      }
    }
  }
</script>

<style scoped>

</style>