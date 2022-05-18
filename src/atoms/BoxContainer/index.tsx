import React, { ReactNode } from 'react'
import { BoxStyled } from './styles'

export const BoxContainer = ({ children }: { children: ReactNode }) => {
    return (
        <BoxStyled>{children}</BoxStyled>
    )
}
