import React, { ReactNode } from 'react'
import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constant';

export const AnchorStyled = styled.a`
    color: rgba(255,204,0,1);
    &:hover{
        cursor: pointer;
        color: #FFF2BF;
    }
    &:active{
        color: rgba(255,204,0,.8);
    }
`
export const AnchorAtom = ({ children,href,target}: { children: ReactNode,href:any,target:any}) => {
    return (
        <AnchorStyled href={href} target={target}>{children}</AnchorStyled>
    )
}
