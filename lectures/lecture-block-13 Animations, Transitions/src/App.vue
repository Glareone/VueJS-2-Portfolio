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

        <!--
          name for transition means that fade-enter fade-leave, fade-enter-active, fade-leave-active classes will be attached
           to this particular transition element.

          v-enter, v-leave, v-enter-active v-leave-active are default names for transitions without name. they will be attached to them.

          this classes should be created in style block (scoped here or anywhere else).
         -->
        <p>using transition property</p>
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <hr>
        <p>using animate property</p>
        <transition name="slide">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <hr>
        <!-- mix from animate and transition -->
        <p>using animate + transition properties</p>

        <!--
        PAY ATTENTION on type here and styles for this transition element.
        Different time for animate and transition.
        With such different we will see ugly behavior, like jump at the end of animation
        It is because Css don't know which time it must bases on.

        That's why we need to use type on transition element. It means which time we would like to use like a major one.

        animation means that when animation is finished - we shouldn't wait when transition will finish up. (element will be hidden after .5s).
        transition means the same thing.
        -->
        <transition name="slide-transition" type="transition">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <hr>
        <!-- you could also use v-show for animation. the general difference is v-show uses display:none and does not attach detach element from DOM. -->
        <transition name="slide-transition" type="transition">
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition>

        <!-- Pay attention on appear -->
        <p>Show element on a page with animation (when v-if is true at the beginning)</p>
        <transition name="fade" appear>
          <div class="alert alert-info" v-if="true">Demo how to animate element on a page when v-if is true at the beginning</div>
        </transition>
        <hr>
        <!--
          Two css classes at once by using enter-class:
           animated, bounce - classes from animate.css which is bound to link in main.js.
           enter-class and leave-class are not necessary because they are empty.
           -->
        <p>use animate classes outside: Animate.css</p>
        <transition
            enter-class=""
            enter-active-class="animated bounce"
            leave-class=""
            leave-active-class="animated shake"
        >
          <div class="alert alert-info" v-if="show">Demo how to animate element</div>
        </transition>
        <hr>

        <!-- Dynamic name in transition class. Pay attention on :name -->
        <label for="1">using dynamic name in transition tag:</label>
        <select name="select" id="1" v-model="selectedClass" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br><br>
        <transition :name="selectedClass">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>

        <!--
          Transition between multiple elements.
          Pay attention on key. it is required parameter here.
          Only one element should be diplayed (IN DOM) at time. v-show doesn't work. only v-if.
          also pay attention on mode. 2 options:
              out-in and in-out. out-in - let the old leave first.
              in-out - let the new one be added to DOM first.
         -->
        <hr>
        <p>Switching between multiple elements with animation:</p>
        <transition name="fade" mode="in-out">
          <div class="alert alert-danger" v-if="show" key="1">This is some Danger</div>
          <div class="alert alert-warning" v-else key="2">This is some Warning</div>
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
        selectedClass: 'fade'
      }
    }
  }
</script>

<!--
  opacity 0; we want to have an initial state.

  fade-enter will be immediately removed after 1 frame.

  we didn't add opacity: 1 to enter-active because we can't make animation then.
  it will be instantly visible.
 -->

<style scoped>
  /* FOR fade transition element in a DOM (name) */

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
     /* opacity: 1; we could pass opacity: 1; here. but it is a default value and no reason to pass it here explicitly. */
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0; /* we need to pass opacity here because we ask vue to animate opacity value from default value (it is 1) to new one (which is described here) */
  }

  /* FOR slide transition element in a DOM (name) */

  .slide-enter {
     /* transform: translateY(20px); beginning statement. no reason to state it here because we describe it in keyframes */
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards; /* forwards -animation stays in the end position */
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards; /* forwards -animation stays in the end position */
  }

  /* FOR slide-transition transition element in a DOM (name) */

  .slide-transition-enter {
    opacity: 0;
  }

  .slide-transition-enter-active {
    animation: slide-in .5s ease-out forwards; /* forwards -animation stays in the end position */
    transition: opacity 3s;
  }

  .slide-transition-leave {

  }

  /*
    PAY ATTENTION on 3s and 1s. Different time. With such different we will see ugly behavior, like jump at the end of animation
    It is because Css don't know which time it must bases on.

    That's why we need to use type on transition element. It means which time we would like to use like a major one.
   */
  .slide-transition-leave-active {
    animation: slide-out .5s ease-out forwards; /* forwards -animation stays in the end position */
    transition: opacity 3s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
