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
        <!-- CUSTOM DIRECTIVE USAGE. Colored background color  -->
        <p v-highlight="'red'">Color Text</p>
        <!-- :background here is argument. Access to it using binding.arg  -->
        <p v-highlight2:background="'green'">Color Text</p>
        <p v-highlight2:anotherArg="'green'">Color Text will be green</p>
        <p v-highlight2>Color Text will be black because binding.value is undefined (binding.arg is also undefined)</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>
