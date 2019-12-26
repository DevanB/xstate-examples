<template>
  <Container>
    <H1 data-testid='welcome-header'>Welcome to the Trivia Challenge</H1>
    <TextContainer>
      <P>You will be presented with 10 true or false questions.</P>
      <P>Can you score 100%?</P>
    </TextContainer>
    <Button @click="startQuiz" data-testid='begin-button'>
      Begin
    </Button>
  </Container>
</template>

<script>
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import H1 from '../components/H1.vue'
import P from '../components/P.vue'
import TextContainer from '../components/TextContainer.vue'
export default {
  name: "Welcome",
  props: {
    startQuizFunc: { type: Function },
  },
  components: {
    Button,
    Container,
    H1,
    P,
    TextContainer
  },
  methods: {
    startQuiz() {
      this.startQuizFunc()
    }
  }
}
</script>
