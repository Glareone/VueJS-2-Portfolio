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
      <hr>
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">Quote New Component</button>
        <p> {{ selectedComponent }}</p>
        <!--
          Dynamic component is here. Also reserved word like slot.
          is - reserved operator. Will interpreter like a name of needed component.
          Selected component will be recreated again and again.
        -->
        <component :is="selectedComponent">
        </component>

        <!-- Using keep-alive keyword we could avoid component recreation. You could check it out taking attention on counter inside
         appNew component (Quote New Component Button). We will preserve the inner state of these components.
         console.log('destroyed'); will also not be raised.
        -->
        <hr>
        <keep-alive>
          <component :is="selectedComponent" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import appAuthor from './components/AppAuthor.vue';
  import appNew from './components/appNew.vue';

  export default {
    data: function() {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      appAuthor,
      appNew
    }
  }
</script>

<style>
  p {
    color: blue;
  }
</style>
