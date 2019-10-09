import {render} from '@testing-library/react'
import React from 'react'
import {WrongIcon} from '../WrongIcon'

describe('<WrongIcon/>', () => {
  it('should match snapshot', () => {
    const {container} = render(<WrongIcon />)
    expect(container).toMatchSnapshot()
  })
})
