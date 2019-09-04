<template>
  <div class="col-sm-6 col-md-4">
    <div
        class="panel panel-info"
        :class="{ 'panel-info': !insufficientQuantity, 'panel-danger': insufficientQuantity }"
    >
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left" style="width: 53%">
          <input type="number" class="form-control" placeholder="quantity" v-model.number="quantity">
        </div>
        <div class="pull-right">
          <!-- :disabled for little kind of validation. Input has number validation: v-model.number (which is used)
               OR :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))"
           -->
          <button class="btn btn-success" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0">
            {{ insufficientQuantity ? 'More than in stock' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'Portfolio-stock',
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
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      },
    },
    methods: {
      ...mapActions({
          placeSellOrder: 'sellStock',
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        };

        //access to vuex method using mapActions spreading before accessing.
        this.placeSellOrder(order);
        this.quantity = 0;
      },
    },
    props: ['stock']
  }
</script>

<style scoped>

</style>