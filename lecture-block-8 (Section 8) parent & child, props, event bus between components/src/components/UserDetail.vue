<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ myName }}</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Name: {{ surName }}</p>
  </div>
</template>

<script>
  export default {
    // This is the default way how  we could define properties. Like array with names.
    // This elements from array should be defined from outside.
    // We defined name in User component (parent component).
    //props: ['myName', 'surName'],

    // To get props with validation we should use another way (object instead of array initialization):
    props: {
      // It could be multiple types for example. String OR Array. If we set up only string - it will use it like string in every situation.
      //myName: [String, Array]


      myName: String,
      // Another option:
      // myName: {
      //   type: String,
      //   required: true, // optional parameter
      //   default: 'Name11' // optional parameter
      //   default: function() { return { name: 'Max' } } // another way how to write default parameter for Object or Array.
      // }

    },
    methods: {
      // this method also will be called after changing myName. And switchName() result will be up to date.
      switchName() {
        return this.myName.split('').reverse().join('');
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
