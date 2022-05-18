import React, { ReactNode } from 'react'
import { SectionStyled } from './styles'

export const SectionAtom = ({ children }: { children: ReactNode }) => {
    return (
        <SectionStyled>{children}</SectionStyled>
    )
}
