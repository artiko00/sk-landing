import React, { ReactNode } from 'react'
import styled from 'styled-components'
const SmallStyled = styled.div`
    color:#e5e7eb;
    font-size:1.3rem;
`
export const SmallAtom = ({ children }: { children: ReactNode }) => {
  return (
    <SmallStyled>{ children }</SmallStyled>
  )
}
