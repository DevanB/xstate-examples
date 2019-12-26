<template>
  <Container>
    <H1 data-testid='quiz-header'>{question.category}</H1>
    <Content>
      <QuestionText>{question.question}</QuestionText>
      <Actions>
        <Button data-testid='answer-true-button'>
          True
        </Button>
        <Button data-testid='answer-false-button'>
          False
        </Button>
      </Actions>
    </Content>
    <QuestionsCount>
      {currentQuestionNumber} of {totalQuestions}
    </QuestionsCount>
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
  components: {
    Actions,
    Button,
    Container,
    H1,
    P
  }
}

// answerFalse, answerTrue, currentQuestionNumber, question, totalQuestions
/* const QuestionText = tw(P)`w-full md:w-4/5 mb-2 text-center` */
/* const QuestionsCount = tw(P)`text-sm mt-2` */
/* const Content = tw(Container)`w-full md:w-3/4 p-0 md:p-5` */
</script>

<style>
</style>

