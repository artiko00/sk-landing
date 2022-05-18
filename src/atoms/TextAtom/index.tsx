import React, { ReactNode } from 'react'
import styled from 'styled-components'

const TextStyled = styled.p`
  color:#FFF;
  display: flex;
  justify-content: center;
  gap: .5rem;
  `
export const TextAtom = ({ children }: { children: ReactNode }) => {
    return (
        <TextStyled>{children}</TextStyled>
    )
}
