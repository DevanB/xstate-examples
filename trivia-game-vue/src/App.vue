<template>
  <div>
    {{ current.value }}
    <div v-if="current.matches('welcome')">
      <Welcome :startQuizFunc="send.bind('START_QUIZ')"/>
    </div>
    <div v-else-if="current.matches('loading')">
      <Loading />
    </div>
    <div v-else-if="current.matches('failure')">
      <Failure :retryFunc="send('RETRY')" :startOverFunc="send('START_OVER')"/>
    </div>
    <div v-else-if="current.matches('quiz')">
      <p>Quiz</p>
    </div>
    <div v-else-if="current.matches('results')">
      <p>Results</p>
    </div>
  </div>
</template>

<script>
import { interpret } from "xstate";
import machine from "./machine";
import Failure from "./screens/Failure.vue";
import Welcome from "./screens/Welcome.vue";
import Loading from "./screens/Loading.vue";

export default {
  name: "app",
  components: {
    Failure,
    Welcome,
    Loading
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
