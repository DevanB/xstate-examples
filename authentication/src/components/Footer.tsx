import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: white;
`

export const Footer: React.FC = () => (
  <StyledFooter>
    <a href='/' aria-label='Back to home'>
      Home
    </a>
    <span>&copy;Company</span>
  </StyledFooter>
)
