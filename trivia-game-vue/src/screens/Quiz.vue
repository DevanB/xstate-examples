<template>
  <Container>
    <H1 data-testid="quiz-header">{{question.category}}</H1>
    <Container class="content">
      <P class="questionText">{{question.question}}</P>
      <Actions>
        <Button :onClick="answerTrue" data-testid="answer-true-button">
          True
        </Button>
        <Button :onClick="answerFalse" data-testid="answer-false-button">
          False
        </Button>
      </Actions>
    </Container>
    <P class="questionsCount">
      {{ currentQuestionNumber }} of {{ totalQuestions }}
    </P>
  </Container>
</template>

<script>
import Actions from '../components/Actions.vue';
import Button from '../components/Button.vue';
import Container from '../components/Container.vue';
import H1 from '../components/H1.vue';
import P from '../components/P.vue';

export default {
  name: "Quiz",
  props: {
    currentQuestionNumber: { type: Number },
    question: { type: Object },
    totalQuestions: { type: Number }
  },
  components: {
    Actions,
    Button,
    Container,
    H1,
    P
  },
  methods: {
    answerFalse() {
      this.$emit('answerFalse')
    },
    answerTrue() {
      this.$emit('answerTrue')
    }
  }
}
</script>

<style>
.questionText {
  @apply w-full mb-2 text-center;
}

.questionsCount {
  @apply text-sm mt-2;
}

.content {
  @apply w-full p-0;
}

@screen md {
  .content {
    @apply w-3/4 p-5;
  }
}

@screen md {
  .questionText {
    @apply w-3/4;
  }
}
</style>

