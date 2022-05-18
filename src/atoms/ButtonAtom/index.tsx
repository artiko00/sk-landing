import React, { ReactNode } from 'react'

import styled from 'styled-components';

export const ButtonStyled = styled.button`
    width:290px;
    color: rgba(255,255,255,1);
    background-color: rgba(0,173,239,1);
    padding:1rem;
    border-radius: 1rem;
    border:none;
    display: grid;
    place-items: center;
    box-shadow: 0 0 1rem .2rem rgba(0,0,0,.3);
    &:hover{
        cursor: pointer;
        background-color: rgba(0,173,239,.5);

    }
    &:active{
        background-color: rgba(0,173,239,.8);
    }
`

export const ButtonAtom = ({ children, onSubmit }: { children: ReactNode, onSubmit: any }) => {
    return (
        <ButtonStyled onClick={onSubmit}>{children}</ButtonStyled>
    )
}
