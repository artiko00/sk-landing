import React, { ReactNode } from 'react'
import { ContainerStyled } from './styles'

export const ContainerAtom = ({ children }: { children: ReactNode }) => {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}
