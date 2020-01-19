<Container>
  <H1 data-testid='failure-header'>Failure!</H1>
  <TextContainer>
    <P>Looks like there where a problem.</P>
    <P>You can retry loading the game or start over.</P>
  </TextContainer>
  <Actions>
    <Button on:onClick={retry} data-testid='retry-button'>
      Retry
    </Button>
    <Button on:onClick={startOver} data-testid='start-over-button'>
      Start Over
    </Button>
  </Actions>
</Container>

<script>
import Actions from '../components/Actions.svelte'
import Button from '../components/Button.svelte'
import Container from '../components/Container.svelte'
import H1 from '../components/H1.svelte'
import P from '../components/P.svelte'
import TextContainer from '../components/TextContainer.svelte'
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
  
function retry() {
  dispatch('retry')
}

function startOver() {
  dispatch('startOver')
}
</script>
