import {render} from '@testing-library/react'
import React from 'react'
import {H1, P} from '../Typography'

describe('<H1/>', () => {
  it('should match snapshot', () => {
    const {container} = render(<H1 />)
    expect(container).toMatchSnapshot()
  })
})

describe('<P/>', () => {
  it('should match snapshot', () => {
    const {container} = render(<P />)
    expect(container).toMatchSnapshot()
  })
})
