import React from 'react'
import {State} from 'xstate'
import {Actions, Button, Container, H1, P, TextContainer} from '../components'
import {AppMachineContext, AppMachineEvent} from '../types'

interface FailureProps {
  retry: () => State<AppMachineContext, AppMachineEvent>
  startOver: () => State<AppMachineContext, AppMachineEvent>
}

export const Failure: React.FC<FailureProps> = ({retry, startOver}) => (
  <Container>
    <H1 data-testid='failure-header'>Failure!</H1>
    <TextContainer>
      <P>Looks like there where a problem.</P>
      <P>You can retry loading the game or start over.</P>
    </TextContainer>
    <Actions>
      <Button onClick={retry} data-testid='retry-button'>
        Retry
      </Button>
      <Button onClick={startOver} data-testid='start-over-button'>
        Start Over
      </Button>
    </Actions>
  </Container>
)
