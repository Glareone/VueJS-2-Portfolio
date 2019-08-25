<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br>
        <br>
        <!--
          Transition is a special component which we could use to animate element appearance and removal from the DOM.
          You can animate only one element with transition element.

          For group elements like list we have to use transition-list.
         -->
        <transition>
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      }
    }
  }
</script>

<style>

</style>
