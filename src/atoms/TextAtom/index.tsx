import React, { ReactNode } from 'react'
import styled from 'styled-components'

const TextStyled = styled.p`
  color:#000;
  display: flex;
  justify-content: center;
  gap: 2rem;
  `
export const TextAtom = ({ children }: { children: ReactNode }) => {
    return (
        <TextStyled>{children}</TextStyled>
    )
}
