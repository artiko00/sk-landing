import React, { ReactNode } from 'react'

import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constant';

export const ImgStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: .3rem;
gap:.3em;
font-size:1.3em;
color:rgba(255,255,255,0.5);
@media (min-width: ${MEDIA_QUERY}px) {
    font-size:3em;
    }

`
export const ImgAtom = ({ children }: { children: ReactNode }) => {
    return (
        <ImgStyled>{children}</ImgStyled>
    )
}
