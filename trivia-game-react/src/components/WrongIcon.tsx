import React from 'react'
import tw from 'tailwind.macro'

const CloseSvg = () => (
  <svg viewBox='0 0 20 20'>
    <path
      d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z'
      fill='currentColor'
    />
  </svg>
)

const Icon = tw.div`h-4 w-4 text-red-500 hover:text-red-700`

export const WrongIcon = () => (
  <Icon>
    <CloseSvg />
  </Icon>
)
