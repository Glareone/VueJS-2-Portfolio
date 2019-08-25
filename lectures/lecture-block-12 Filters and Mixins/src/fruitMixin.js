export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Melon', 'Mango'],
      filterText: '',
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((fruit) => {
        return fruit.match(this.filterText);
      });
    }
  },
  created() {
    // we will see this message twice if we use this mixin in two places.
    // And this method also will be merged with other created methods correctly (whenever we use our current mixin).
    // This messame will raise first, before messages from created hook in components.
    console.log('Mixin is created. Lifecycle hook');
  }
};