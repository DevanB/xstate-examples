<div class="appWrapper">
  <main class="main">
    <GlobalStyle />
    {#if $current.matches('welcome')}
      <Welcome on:startQuiz={startQuiz}/>
    {:else if $current.matches('loading')}
      <Loading />
    {:else if $current.matches('failure')}
      <Failure on:retry={retry} on:startOver={startOver}/>
    {:else if $current.matches('quiz')}
      <Quiz 
        on:answerFalse={answerFalse}
        on:answerTrue={answerTrue}
        currentQuestionNumber={$current.context.currentQuestionDisplay}
        question={$current.context.questions[$current.context.currentQuestion]}
        totalQuestions={$current.context.questions.length}
      />
    {:else if $current.matches('results')}
      <Results 
        on:playAgain={playAgain}
        questions={$current.context.questions}
        totalCorrectAnswers={$current.context.totalCorrectAnswers}
        totalQuestions={$current.context.questions.length}
      />
    {/if}
  </main>
</div>

<script>
  import { useMachine } from 'svelte-xstate'
	import GlobalStyle from './components/GlobalStyle.svelte';
  import Failure from './screens/Failure.svelte';
  import Loading from './screens/Loading.svelte';
  import Quiz from './screens/Quiz.svelte';
  import Results from './screens/Results.svelte';
  import Welcome from './screens/Welcome.svelte';
  import machine from './machine';

  let [current, send] = useMachine(machine)

  function startQuiz() {
    send("START_QUIZ")
  }
  function retry() {
    send("RETRY")
  }
  function startOver() {
    send("START_OVER")
  }
  function answerFalse() {
    send({ type: 'ANSWER_FALSE', answer: false })
  }
  function answerTrue() {
    send({ type: 'ANSWER_TRUE', answer: true })
  }
  function playAgain() {
    send('PLAY_AGAIN')
  }
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
