<template>
  <div class="col-sm-6 col-md-4">
    <div
        class="panel"
        :class="{ 'panel-success': !insufficientFunds, 'panel-danger': insufficientFunds }"
    >
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.name }} <small>(Price: {{ stock.price }})</small></h3>
      </div>
      <div class="panel-body" >
        <div class="pull-left" style="width: 55%">
          <input type="number" class="form-control" placeholder="quantity" v-model.number="quantity">
        </div>
        <div class="pull-right">
          <!-- :disabled for little kind of validation. Input has number validation: v-model.number (which is used)
               OR :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))"

               insufficientFunds - computed value for validation
           -->
          <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0">
            {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Stock',
    data() {
      return {
        quantity: 0,
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      // this computed value will use to validate could we spend more funds that we already have.
      // stock from props
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      },
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        };

        // we also could spread mapActions(['buyStock']) in methods and then use it here: this.buyStock(order);
        // see example in portfolio/Stock.vue
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      },
    },
    props: ['stock']
  }
</script>

<style scoped>

</style>