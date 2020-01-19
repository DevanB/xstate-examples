<Container>
  <H1 data-testid='welcome-header'>Welcome to the Trivia Challenge</H1>
  <TextContainer>
    <P>You will be presented with 10 true or false questions.</P>
    <P>Can you score 100%?</P>
  </TextContainer>
  <Button on:onClick={startQuiz} data-testid='begin-button'>
    Begin
  </Button>
</Container>

<script>
  import Button from '../components/Button.svelte'
  import Container from '../components/Container.svelte'
  import H1 from '../components/H1.svelte'
  import P from '../components/P.svelte'
  import TextContainer from '../components/TextContainer.svelte'
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
	function startQuiz() {
    dispatch('startQuiz')
	}
</script>

