<Container>
  <H1 data-testid='results-header'>
    You scored
    <br />
    {totalCorrectAnswers} / {totalQuestions}
  </H1>
  <ul class="questionsResult">
    {#each questions as question (question.question)}
    <li class="result">
      <span class="icon">
        {#if question.correct === true}
          <CorrectIcon />
        {:else if question.correct === false}
          <WrongIcon />
        {/if}
      </span> 
      {question.question}
    </li>
    {/each}
  </ul>
  <Button on:onClick={playAgain} data-testid='play-again-button'>
    Play Again
  </Button>
</Container>

<script>
import Button from '../components/Button.svelte';
import Container from '../components/Container.svelte';
import CorrectIcon from '../components/CorrectIcon.svelte';
import H1 from '../components/H1.svelte';
import WrongIcon from '../components/WrongIcon.svelte';
import { createEventDispatcher } from 'svelte';

export let questions
export let totalCorrectAnswers
export let totalQuestions

const dispatch = createEventDispatcher();

function playAgain() {
  dispatch('playAgain')
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
