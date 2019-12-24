import {render} from '@testing-library/react'
import React from 'react'
import {GlobalStyle} from '../GlobalStyle'

describe('<GlobalStyle/>', () => {
  it('should match snapshot', () => {
    const {container} = render(<GlobalStyle />)
    expect(container).toMatchSnapshot()
  })
})
