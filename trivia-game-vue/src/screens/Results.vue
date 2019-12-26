<template>
  <Container>
    <H1 data-testid='results-header'>
      You scored
      <br />
      {totalCorrectAnswers} / {totalQuestions}
    </H1>
    <QuestionResults>
      {questions.map(question => (
        <Result key={question.question}>
          <Icon>
            {question.correct === true ? <CorrectIcon /> : <WrongIcon />}
          </Icon>{' '}
          {question.question}
        </Result>
      ))}
    </QuestionResults>
    <Button data-testid='play-again-button'>
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
  }
}

// questions, playAgain, totalCorrectAnswers, totalQuestions
/* const QuestionResults = tw.ul`w-3/4 my-4` */
/* const Icon = tw.span`mr-4` */
/* const Result = tw.li`flex mb-4 items-center` */
</script>

<style>
</style>
