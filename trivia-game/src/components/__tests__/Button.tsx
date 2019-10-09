import {render} from '@testing-library/react'
import React from 'react'
import {Button} from '../Button'

describe('<Button/>', () => {
  it('should match snapshot', () => {
    const {container} = render(<Button />)
    expect(container).toMatchSnapshot()
  })
})
