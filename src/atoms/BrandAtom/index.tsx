import React, { ReactNode } from 'react'
import { BrandStyled } from './styles'

export const BrandAtom = ({ children }: { children: ReactNode }) => {
  return (
    <BrandStyled>{children}</BrandStyled>
  )
}
