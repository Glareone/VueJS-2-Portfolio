<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directives</h1>
        <p v-text="'Some text'"></p> <!-- some text will be displayed -->
        <p v-html="'<strong>Strong Text</strong>'"></p><!-- HTML. Need to be sanitized -->
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <h3>Global Directives</h3>
        <!-- CUSTOM DIRECTIVE USAGE. Colored background color  -->
        <p v-highlight="'red'">Color Text</p>
        <!-- :background here is argument. Access to it using binding.arg  -->
        <p v-highlight2:background="'green'">Color Text</p>
        <p v-highlight2:anotherArg="'green'">Color Text will be green</p>
        <p v-highlight2>Color Text will be black because binding.value is undefined (binding.arg is also undefined)</p>
        <!-- :delayed is a modifier. It is not a build-in modifier and will be created  -->
        <p v-highlight2:background.delayed="'orangered'">BackGround will be orangered with delay</p>
        <hr>
        <h3>Local Directives</h3>
        <p v-local-highlight:background.delayed="'orangered'">BackGround will be orangered with delay</p>
        <h4>Multiple Modifiers</h4>
        <p v-local-highlight-blink:background.delayed.blink="'orangered'">BackGround will be orangered with delay</p>
        <!-- more complex arguments are here -->
        <p v-local-highlight-blink2:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 500 }">BackGround will be orangered with delay</p>
      </div>
    </div>
  </div>
</template>

<script>
  // We also could register directives locally
  export default {
    directives: { // as same as for components. But here we declare directives locally
      'local-highlight': {
        bind(el, binding, vnode) {
          // checking custom modifiers
          let delay = 0;
          if(binding.modifiers['delayed']) {
            delay = 1000;
          }

          // using a delay modifier
          setTimeout(() => {
            if(binding.arg === 'background') { // checking arguments
              el.style.backgroundColor = binding.value;
            }
            else {
              el.style.color = binding.value; // otherwise set up the text color
            }
          }, delay);
        }
      },
      'local-highlight-blink': {
        bind(el, binding, vnode) {
          // checking custom modifiers
          let delay = 0;
          if(binding.modifiers['delayed']) {
            delay = 1000;
          }

          // using a delay modifier with blink modifier
          if(binding.modifiers['blink']) {

            let mainColor = binding.value;
            let secondColor = 'blue';
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor = currentColor === secondColor ? mainColor : secondColor;
                if(binding.arg === 'background') { // checking arguments
                  el.style.backgroundColor = currentColor;
                }
                else {
                  el.style.color = currentColor; // otherwise set up the text color
                }
              }, 1000);
            }, delay);
          }
          else {
            setTimeout(() => {
              if(binding.arg === 'background') { // checking arguments
                el.style.backgroundColor = binding.value;
              }
              else {
                el.style.color = binding.value; // otherwise set up the text color
              }
            }, delay);
          }
        }
      },
      'local-highlight-blink2': {
        bind(el, binding, vnode) {
          // checking custom modifiers
          let delay = 0;
          if(binding.modifiers['delayed']) {
            delay = 1000;
          }

          // using a delay modifier with blink modifier
          if(binding.modifiers['blink']) {
            // instead of binding.value we have to use binding.value.mainColor (because we sent an object)
            let mainColor = binding.value.mainColor;
            // instead of binding.value we have to use binding.value.mainColor (because we sent an object)
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor = currentColor === secondColor ? mainColor : secondColor;
                if(binding.arg === 'background') { // checking arguments
                  el.style.backgroundColor = currentColor;
                }
                else {
                  el.style.color = currentColor; // otherwise set up the text color
                }
              }, binding.value.delay);
            }, binding.value.delay);
          }
          else {
            setTimeout(() => {
              if(binding.arg === 'background') { // checking arguments
                // instead of binding.value we have to use binding.value.mainColor (because we sent an object)
                el.style.backgroundColor = binding.value.mainColor;
              }
              else {
                el.style.color = binding.value; // otherwise set up the text color
              }
            }, delay);
          }
        }
      },
    }
  }
</script>

<style>

</style>
