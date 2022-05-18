import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constant';

export const BrandStyled = styled.div`
   display: flex;
   align-items: center;
   gap:1em;
   color:white;
   @media (max-width: ${MEDIA_QUERY}px) {
       justify-content:center;
    }
    `