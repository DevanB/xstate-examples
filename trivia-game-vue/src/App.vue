<template>
  <div class="appWrapper">
    <main class="main">
      <div v-if="current.matches('welcome')">
        <Welcome @startQuiz="send('START_QUIZ')"/>
      </div>
      <div v-else-if="current.matches('loading')">
        <Loading />
      </div>
      <div v-else-if="current.matches('failure')">
        <Failure @retry="send('RETRY')" @startOver="send('START_OVER')"/>
      </div>
      <div v-else-if="current.matches('quiz')">
        <Quiz
          @answerFalse="send({ type: 'ANSWER_FALSE', answer: false })"
          @answerTrue="send({ type: 'ANSWER_TRUE', answer: true })"
          :currentQuestionNumber="current.context.currentQuestionDisplay"
          :question="current.context.questions[current.context.currentQuestion]"
          :totalQuestions="current.context.questions.length"
        />
      </div>
      <div v-else-if="current.matches('results')">
        <Results 
          @playAgain="send('PLAY_AGAIN')"
          :questions="current.context.questions"
          :totalCorrectAnswers="current.context.totalCorrectAnswers"
          :totalQuestions="current.context.questions.length"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { interpret } from "xstate";
import machine from "./machine";
import Failure from "./screens/Failure.vue";
import Loading from "./screens/Loading.vue";
import Quiz from "./screens/Quiz.vue";
import Results from "./screens/Results.vue";
import Welcome from "./screens/Welcome.vue";

export default {
  name: "app",
  components: {
    Failure,
    Loading,
    Quiz,
    Results,
    Welcome
  },
  created() {
    this.machineService
      .onTransition(state => {
        this.current = state;
      }).start()
  },
  data() {
    return {
      machineService: interpret(machine),
      current: machine.initialState
    };
  },
  methods: {
    send(event) {
      this.machineService.send(event)
    }
  }
};
</script>

<style>
.appWrapper {
  @apply min-h-screen min-w-full h-screen w-screen flex justify-center items-center bg-gray-200;
}

.main {
  @apply z-20 w-11/12 h-auto max-h-screen overflow-y-scroll m-4 flex flex-col items-center bg-white rounded shadow;
}

@screen md {
  .main {
    @apply w-3/4 m-0;
  }
}

@screen lg {
  .main {
    @apply w-1/2;
  }
}
</style>
