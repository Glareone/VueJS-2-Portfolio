<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr>
        <!--        <app-header />-->
        <!--
          name - is a name of components which is used to display here.
          (for example if we use multiple components in a one route component.
          pay attention on routes.js, "components" property (not component).
         -->

        <!--
          For home page: based on components in a routes.js we will see Header
          (which declared like 'header-top' in routes) on the top Home in the middle.
          For user page: also based on routes.js we will see User page on the top and then
          Header(which declared like 'header-bottom')
        -->
        <router-view name="header-top"/>
        <!-- to animate routing -->
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>

        <router-view name="header-bottom"/>

      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    components: {
      appHeader: Header,
    }
  }
</script>

<style scoped>
  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>