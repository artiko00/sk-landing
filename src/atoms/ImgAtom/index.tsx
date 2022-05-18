import React, { ReactNode } from 'react'

import styled from 'styled-components';

export const ImgStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1rem;
gap:1em;
font-size:2rem;
color:rgba(255,255,255,0.5);
`
export const ImgAtom = ({ children }: { children: ReactNode }) => {
    return (
        <ImgStyled>{children}</ImgStyled>
    )
}
