import React, { ReactNode } from 'react'
import styled from 'styled-components'

const TextStyled = styled.p`
  color:#FFF;
  font-size: 1.5rem;
  `
export const NumberAtom = ({ children }: { children: ReactNode }) => {
    return (
        <TextStyled>{children}</TextStyled>
    )
}
