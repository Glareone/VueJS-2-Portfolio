<template>
  <div>
    <!--
     To use html code from parent we have to use slots.

     Pay attention on "H2" styling. We could style slot inside child component (here) because slot compiled here.
     After last changes in VueJS2: It could be styled directly from child component (where it is used) or from parent component.

     name here - is from slot in parent.
     If slot don't have name - it will reference to DEFAULT slot. Last one is without slot.
    -->


    <slot name="quoteTitleBlock"/>
    <slot name="paragraph"/>
    <slot/>

    <!-- Pay attention on this one. We don't have subTitle in parent. And we want the next behavior:
      If we don't have such subTitle from parent - we would like to provide Default Text or something else.
    -->
    <slot name="subTitle">
      <p>Default Slot information if such slot doesn't exist in parent</p>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'Quote',
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