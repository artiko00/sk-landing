import React, { ReactNode } from 'react'
import styled from 'styled-components'

const FlexContainerStyled = styled.div`
  display: flex;
  gap:2em;
  justify-content: center;
  margin: 1rem;
  `

export const FlexContainer = ({ children }: { children: ReactNode }) => {
    return (
        <FlexContainerStyled>{children}</FlexContainerStyled>
    )
}
