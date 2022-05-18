import React, { ReactNode } from 'react'

import styled from 'styled-components';

export const ButtonStyled = styled.button`
    width:290px;
    color: rgba(3,46,121,1);
    background-color: rgba(255,204,0,1);
    padding:1rem;
    border-radius: 1rem;
    border:none;
    display: grid;
    place-items: center;
    box-shadow: 0 0 1rem .2rem rgba(0,0,0,.3);
    &:hover{
        cursor: pointer;
    }
    &:active{
        background-color: rgba(255,204,0,.8);
    }
`

export const ButtonAtom = ({ children, onSubmit }: { children: ReactNode, onSubmit: any }) => {
    return (
        <ButtonStyled onClick={onSubmit}>{children}</ButtonStyled>
    )
}
