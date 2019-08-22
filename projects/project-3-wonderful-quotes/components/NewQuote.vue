<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label for="1">Quote</label>
        <!-- take a look on v-model(2 way binding): lecture-23 or https://ru.vuejs.org/v2/guide/forms.html -->
        <textarea class="form-control" name="" id="1" cols="30" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset col-xs-12 col-md-6 col-md-offset-3 form-group">
        <!-- prevent - prevent default to prevent page reloading -->
        <button class="btn btn-primary" @click.prevent="createNewQuote">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'NewQuote',
    data: function() {
      return {
        quote: ''
      };
    },
    methods: {
      createNewQuote() {
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  }
</script>

<style scoped>
</style>