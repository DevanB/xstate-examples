import React from 'react'
import tw from 'tailwind.macro'

const CheckmarkSvg = () => (
  <svg viewBox='0 0 20 20'>
    <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' fill='currentColor' />
  </svg>
)

const Icon = tw.div`h-4 w-4 text-green-500 hover:text-green-700`

export const CorrectIcon = () => (
  <Icon>
    <CheckmarkSvg />
  </Icon>
)
