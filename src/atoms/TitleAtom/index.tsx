import React, { ReactNode } from 'react'
import styled from 'styled-components'
const TitleStyled = styled.div`
    color:white;
    font-size:2rem;
    display: flex;
    justify-content: center;
    padding:1rem;
`
export const TitleAtom = ({ children }: { children: ReactNode }) => {
    return (
        <TitleStyled>{children}</TitleStyled>
    )
}
