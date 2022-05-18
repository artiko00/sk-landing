import React, { ReactNode } from 'react'
import { InputStyled } from './styles'

export const InputAtom = ({ value, onWrite }: { value: any, onWrite: any }) => {
    return (
        <InputStyled type="email" placeholder='Enter email' onChange={onWrite} value={value} />
    )
}
