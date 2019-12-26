<template>
  <button 
    class="btn btn-blue"
    v-on:click="send('TOGGLE')"
  >
    {{ current.matches("inactive") ? "Off" : "On" }}
  </button>
</template>

<script>
import { Machine, interpret } from "xstate";

// Define machine externally
const toggleMachine = Machine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: { TOGGLE: "active" }
    },
    active: {
      on: { TOGGLE: "inactive" }
    }
  }
});

export default {
  name: "Toggle",
  created() {
    // Start service on component creation
    this.toggleService
      .onTransition(state => {
        this.current = state;
      })
      .start();
  },
  data() {
    return {
      // Interpret machine and store it in data
      toggleService: interpret(toggleMachine),

      // Start with machine's initial state
      current: toggleMachine.initialState
    };
  },
  methods: {
    // Send events to the service
    send(event) {
      this.toggleService.send(event);
    }
  }
};
</script>

<style>
.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
