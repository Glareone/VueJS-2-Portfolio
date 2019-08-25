<template>
  <div>
    <input type="text" v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
  import { fruitMixin } from './fruitMixin';

  // export default {
  //   // like a code snippet which was added to this instance.
  //   // we moved all vue object from this vue instance to js object.
  //   mixins: [fruitMixin]
  // };

  export default {
    // we could use only mixin prop in an vue object.
    // but also we could use mixin in class with data, filters, components and so on.
    // Methods with the same name  will be merged correctly. Pay attention on created() method here and in fruitMixin file.
    mixins: [fruitMixin], // we register mixin locally
    data() {
      return {
        text: 'Hello world!',
      }
    },
    // Pay attention. Here we register our filters locally and could use it also only locally
    // We could register it globally like we did with directives for example
    filters: {
      // value here is a data which we would like to transform. value here is a 'text' from {{  text | toUppercase }}
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter((fruit) => {
          return fruit.match(this.filterText);
        });
      }
    },
    // Pay attention. we already have created method in fruitMixin (mixin). And here. Two methods with the same name. And both of them will work.
    created() {
      console.log('List with Mixin is created. Lifecycle hook');
    }
  };
</script>

<style>

</style>
