<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <p> Button with custom directive</p>
        <!-- We use value field to provide click to our directive -->
        <button v-custom-directive="handleClick" class="btn btn-primary">Click me</button>
        <hr>
        <!-- We use arg fields to provide click to our directive. Second approach -->
        <button v-custom-directive:click="handleClick" class="btn btn-primary">Click me</button>
        <hr>
        <p>Click me. Mouse Enter. Mouse Leave.</p>
        <!-- Third approach using Div instead of button. Bind three methods to custom directive -->
        <div
            style="width: 100px; height: 100px; background-color: lightgreen;"
            v-mouse-directive:mouseenter="handleMouseEnter"
            v-mouse-directive:mouseleave="handleMouseLeave"
            v-mouse-directive:click="handleClick"
        >
          Click me
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      customDirective: {
        bind(el, binding) {
          // First example
          el.onclick = function() {
            binding.value();
          }
        }
      },
      customDirective2: {
        bind(el, binding) {
          // Flexible event listener
          const eventType = binding.arg; // get event name
          const executeFunction = binding.value; // get executed function
          el.addEventListener(eventType, executeFunction);
        }
      },
      mouseDirective: {
        bind(el, binding) {
          // Flexible event listener
          const eventType = binding.arg; // get event name
          const executeFunction = binding.value; // get executed function
          el.addEventListener(eventType, executeFunction);
        }
      },
    },
    methods: {
      handleClick() {
        alert('I was clicked');
      },
      handleMouseEnter(event) {
        event.target.style.backgroundColor = '#ccc';
      },
      handleMouseLeave(event) {
        event.target.style.backgroundColor = '#0a0af0';
      }
    }
  }
</script>

<style>
</style>
