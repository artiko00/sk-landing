import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY } from '../../constant'

const TextStyled = styled.p`
  color:#FFF;
  display: flex;
  justify-content: center;
  font-size: .8em;
  gap: .5em;
  @media (min-width: ${MEDIA_QUERY}px) {
    font-size:1.5em;
    }
  `
export const TextAtom = ({ children }: { children: ReactNode }) => {
    return (
        <TextStyled>{children}</TextStyled>
    )
}
