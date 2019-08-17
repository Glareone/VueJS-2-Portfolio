<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ myName }}</p>
    <p>User Name Reversed: {{ switchName() }}</p>
    <p>User Surname (doesn't work): {{ surName }}</p>
    <p>User Age (Will be edited from another sibling by event bus): {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFunction()">Reset Function From Parent</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

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
      resetFunction: Function, // Function which was declared in Parent "User"
      userAge: Number,
    },
    methods: {
      // this method also will be called after changing myName. And switchName() result will be up to date.
      switchName() {
        return this.myName.split('').reverse().join('');
      },
      resetName() {
        // wrong way (without using $emit) because we mutated our prop outside. Parent component still stores old value (but shows updated one)
        this.myName = 'Max2';
        // RIGHT WAY. 1) Name of event whatever you like. 2) parameter.
        // We also declare this event in User component.
        this.$emit('nameWasReset', this.myName);
      },
    },
    // EVENT BUS
    // we need "created" lifecycle hook to use our eventBus to create a listener on events which we needed.
    // we will listen the event and when it will raise - we execute the next function
    created() {
      // Using $emit in UserEdit
      eventBus.$on('ageWasEdited', (value) => {
        console.log('event bus raised the event! ageWasEdited, $emit.');
        this.userAge = value;
      });

      // Using methods directly from eventBus.
      eventBus.$on('ageWasEdited_2', (value) => {
        console.log('event bus raised the event! ageWasEdited_2, method from event bus');
        this.userAge = value;
      });
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
