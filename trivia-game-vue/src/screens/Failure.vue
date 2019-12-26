<template>
  <Container>
    <H1 data-testid='failure-header'>Failure!</H1>
    <TextContainer>
      <P>Looks like there where a problem.</P>
      <P>You can retry loading the game or start over.</P>
    </TextContainer>
    <Actions>
      <Button @click="retry" data-testid='retry-button'>
        Retry
      </Button>
      <Button @click="startOver" data-testid='start-over-button'>
        Start Over
      </Button>
    </Actions>
  </Container>
</template>

<script>
import Actions from '../components/Actions.vue'
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import H1 from '../components/H1.vue'
import P from '../components/P.vue'
import TextContainer from '../components/TextContainer.vue'

export default {
  name: "Failure",
  components: {
    Actions,
    Button,
    Container,
    H1,
    P,
    TextContainer
  },
  props: {
    retryFunc: { type: Function },
    startOverFunc: { type: Function },
  },
  methods: {
    retry() {
      this.retryFunc()
    },
    startOver() {
      this.startOverFunc()
    }
  }
}

//retry, startOver
</script>
