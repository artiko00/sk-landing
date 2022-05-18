import React, { ReactNode } from 'react'

import styled from 'styled-components';

export const ImgStyled = styled.div`
display: flex;
justify-content: center;
margin: 1rem;
`
export const ImgAtom = ({ children }: { children: ReactNode }) => {
    return (
        <ImgStyled>{children}</ImgStyled>
    )
}
