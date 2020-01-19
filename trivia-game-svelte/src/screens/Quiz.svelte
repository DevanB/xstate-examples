<Container>
  <H1 data-testid="quiz-header">{question.category}</H1>
  <Container class="content">
    <P class="questionText">{question.question}</P>
    <Actions>
      <Button on:onClick={answerTrue} data-testid="answer-true-button">
        True
      </Button>
      <Button on:onClick={answerFalse} data-testid="answer-false-button">
        False
      </Button>
    </Actions>
  </Container>
  <P class="questionsCount">
    { currentQuestionNumber } of { totalQuestions }
  </P>
</Container>

<script>
import Actions from '../components/Actions.svelte';
import Button from '../components/Button.svelte';
import Container from '../components/Container.svelte';
import H1 from '../components/H1.svelte';
import P from '../components/P.svelte';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let currentQuestionNumber
export let question
export let totalQuestions

function answerFalse() {
  dispatch('answerFalse')
}
function answerTrue() {
  dispatch('answerTrue')
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

