import React, { ReactNode } from 'react'

import styled from 'styled-components';

export const ImgStyled = styled.div`
color:rgba(255,255,255,1);
`
export const NameAtom = ({ children }: { children: ReactNode }) => {
    return (
        <ImgStyled>{children}</ImgStyled>
    )
}
