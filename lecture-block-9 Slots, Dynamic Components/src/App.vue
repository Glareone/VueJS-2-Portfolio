<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <!--
            We will display this in child component using slots.
            It could be styled directly from child component (where it is used) or from here (parent component).
            No matter How we would like to draw string info, from variable or directly in HTML
           -->
          <h2 slot="quoteTitleBlock">{{ quoteTitle }}</h2>
          <p slot="paragraph">A wonderful quote</p>

          <!-- slot without name. -->
          <p>Default Paragraph</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';

  export default {
    data: function() {
      return {
        quoteTitle: 'The Quote',
      }
    },
    components: {
      appQuote: Quote
    }
  }
</script>

<style>
  p {
    color: blue;
  }
</style>
