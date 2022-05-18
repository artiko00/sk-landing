import React, { ReactNode } from 'react'

import styled from 'styled-components';

export const ImgStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: .3rem;
gap:.3em;
font-size:1.3em;
color:rgba(255,255,255,0.5);
`
export const ImgAtom = ({ children }: { children: ReactNode }) => {
    return (
        <ImgStyled>{children}</ImgStyled>
    )
}
