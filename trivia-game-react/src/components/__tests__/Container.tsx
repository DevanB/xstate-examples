import {render} from '@testing-library/react'
import React from 'react'
import {Container} from '../Container'

describe('<Container/>', () => {
  it('should match snapshot', () => {
    const {container} = render(<Container />)
    expect(container).toMatchSnapshot()
  })
})
