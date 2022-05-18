import React, { ReactNode } from 'react'
import { RowStyled } from './styles'

export const RowAtom = ({ children }: { children: ReactNode }) => {
    return (
        <RowStyled>{children}</RowStyled>
    )
}
