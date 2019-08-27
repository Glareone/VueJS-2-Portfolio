<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <!--
          we listen both of these events from different components. answered from Question, confirmed from.
          out-in mode - old one should be removed first. We wait till this moment.
         -->
        <transition name="flip" mode="out-in">
          <component :is="selectedComponent" @answered="answered($event)" @confirmed="selectedComponent = 'app-question'" />
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
  import Question from './components/Question.vue';
  import Answer from './components/Answer.vue';

  export default {
    data() {
      return {
        selectedComponent: 'app-question'
      }
    },
    methods: {
      answered(isCorrect) {
        if(isCorrect) {
          this.selectedComponent = 'app-answer';
        }
        else {
          alert('Wrong, try again!');
        }
      }
    },
    components: {
      appQuestion: Question,
      appAnswer: Answer
    }
  }
</script>

<style scoped>
  .flip-enter {
    /* transform: rotateY(0deg); - we don't need it because it is a starting degree. */
  }

  .flip-enter-active {
    animation: flip-in .5s ease-out forwards;
  }

  .flip-leave {
    /* transform: rotateY(0deg); - we don't need it because it is a starting degree. */
  }

  .flip-leave-active {
    animation: flip-out .5s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg); /*0deg because it is initial point */
    }

    to {
      transform: rotateY(90deg);
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg); /* we should start from the position the our old card was rotated on the 50% (90degrees), his edge looks on us */
    }

    to {
      transform: rotateY(0deg);
    }
  }
</style>

