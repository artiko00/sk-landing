import React, { ReactNode } from 'react'
import { SectionStyled } from './styles'

export const SectionGlassAtom = ({ children }: { children: ReactNode }) => {
    return (
        <SectionStyled>{children}</SectionStyled>
    )
}
