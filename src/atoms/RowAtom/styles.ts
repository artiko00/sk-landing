import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constant';

export const RowStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:10px;
    text-align: center;
    padding: 10px;
    margin-top:.5em;

    @media (min-width: ${MEDIA_QUERY}px) {
        text-align: left;
        justify-content: start;
    }
`