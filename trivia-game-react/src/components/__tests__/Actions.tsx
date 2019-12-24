import {render} from '@testing-library/react'
import React from 'react'
import {Actions} from '../Actions'

describe('<Actions/>', () => {
  it('should match snapshot', () => {
    const {container} = render(<Actions />)
    expect(container).toMatchSnapshot()
  })
})
