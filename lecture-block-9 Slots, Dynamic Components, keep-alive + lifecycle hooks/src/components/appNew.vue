<template>
  <div>
    <h3>The New Quote from New Component</h3>
    <!--
      To check is this component recreated again and again after every dynamic component call we will add button here.
      And yes. It starts every time from zero after switching to another component.
      It recreates itself every time.
    -->
    <button @click="counter+=1"> Increase stored counter</button>
    {{ counter }}
  </div>
</template>

<script>
  export default {
    name: 'appNew',
    data: function() {
      return {
        counter: 0,
      }
    },
    destroyed() {
      console.log('destroyed'); // will call every time switching on another component in dynamic component
    },
    // PAY ATTENTION:
    // LIFECYCLE HOOKS AND CONTROLS WHICH ALSO WORKS WITH KEEP-ALIVE
    deactivated() {
      console.log('deactivated. Switched to another component in dyn component');
    },
    activated() {
      console.log('activated again');
    }
  }
</script>

<style scoped>
  div {
    border: solid 1px #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  h2 {
    color: red;
  }
</style>