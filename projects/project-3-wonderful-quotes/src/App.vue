<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"/>
    <!-- @quoteAdded - listen the quoteAdded, quoteDeleted events with $emit -->
    <app-new-quote @quoteAdded="addQuote" />
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote" />
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from '../components/QuoteGrid.vue';
  import NewQuote from '../components/NewQuote.vue';
  import Header from '../components/Header.vue';

  export default {
    data: function() {
      return {
        quotes: [
          'Just a Quote to see something'
        ],
        maxQuotes: 10
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appHeader: Header,
    },
    methods: {
      addQuote(newQuote) {
        if(this.quotes.length >= 10) {
          alert('Please delete quotes first');
          return;
        }
        this.quotes.push(newQuote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    }
  }
</script>

<style>
</style>
