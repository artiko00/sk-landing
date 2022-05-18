import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constant';

export const BoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:10px;
    text-align: center;
    padding: 10px;
    margin-top:2em;

    @media (min-width: ${MEDIA_QUERY}px) {
        flex-direction: row;
    }
`