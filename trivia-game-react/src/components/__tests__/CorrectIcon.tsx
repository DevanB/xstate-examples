import {render} from '@testing-library/react'
import React from 'react'
import {CorrectIcon} from '../CorrectIcon'

describe('<CorrectIcon/>', () => {
  it('should match snapshot', () => {
    const {container} = render(<CorrectIcon />)
    expect(container).toMatchSnapshot()
  })
})
