<template>
  <div>
    <!-- stocks here is from stockPortfolio -->
    <app-stock v-for="stock in stocks" :stock="stock"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Stock from './Stock.vue';

  export default {
    name: 'portfolio',
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio', // assigning new name here for stockPortfolio getter.
      })
    },
    components: {
      appStock: Stock,
    }
  }
</script>

<style scoped>

</style>