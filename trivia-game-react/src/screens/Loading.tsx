import React from 'react'
import tw from 'tailwind.macro'
import {Container as Wrapper, H1} from '../components'

const Container = tw(Wrapper)`justify-center`

export const Loading: React.FC = () => (
  <Container>
    <H1 data-testid='loading-header'>Loading...</H1>
  </Container>
)
