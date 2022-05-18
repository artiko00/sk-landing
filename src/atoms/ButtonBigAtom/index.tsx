import React, { ReactNode } from 'react'

import styled from 'styled-components';

export const ButtonStyled = styled.button`
background: rgba( 255, 255, 255, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 5px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding:1.5rem;
color: #fff;
`
export const ButtonBigAtom = ({ children }: { children: ReactNode }) => {
    return (
        <ButtonStyled>{children}</ButtonStyled>
    )
}
