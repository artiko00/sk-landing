import styled from 'styled-components';

export const InputStyled = styled.input`
    width:260px;
    color: rgba(0,0,0,1);
    background-color: rgba(255,255,255,1);
    padding:1rem;
    border-radius: 1rem;
    border:none;
    display: grid;
    place-items: center;
    box-shadow: 0 0 1rem .2rem rgba(0,0,0,.3);
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(0,0,0,.8);
}
`