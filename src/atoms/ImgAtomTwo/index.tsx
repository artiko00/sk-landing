import React, { ReactNode } from 'react'

import styled from 'styled-components';

export const ImgStyled = styled.div`
display: grid;
place-items:center;
margin: 1rem;
gap:1rem;
`
export const ImgAtomTwo = ({ children }: { children: ReactNode }) => {
    return (
        <ImgStyled>{children}</ImgStyled>
    )
}
