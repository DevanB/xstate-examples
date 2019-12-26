<template>
  <Container>
    <H1 data-testid='results-header'>
      You scored
      <br />
      {{totalCorrectAnswers}} / {{totalQuestions}}
    </H1>
    <ul class="questionsResult">
      <li v-for="question in questions" class="result" v-bind:key="question.question">
        <span class="icon">
          <div v-if="question.correct === true">
            <CorrectIcon />
          </div>
          <div v-else-if="question.correct === false">
            <WrongIcon />
          </div>
        </span> 
        {{question.question}}
      </li>
    </ul>
    <Button :onClick="playAgain" data-testid='play-again-button'>
      Play Again
    </Button>
  </Container>
</template>

<script>
import Button from '../components/Button.vue';
import Container from '../components/Container.vue';
import CorrectIcon from '../components/CorrectIcon.vue';
import H1 from '../components/H1.vue';
import WrongIcon from '../components/WrongIcon.vue';

export default {
  name: "Results",
  components: {
    Button,
    Container,
    CorrectIcon,
    H1,
    WrongIcon
  },
  props: {
    questions: { type: Array },
    totalCorrectAnswers: { type: Number },
    totalQuestions: { type: Number },
  },
  methods: {
    playAgain() {
      this.$emit('playAgain')
    }
  }
}
</script>

<style>
.questionResults {
  @apply w-3/4 my-4;
}

.icon {
  @apply mr-4;
}

.result {
  @apply flex mb-4 items-center;
}
</style>
