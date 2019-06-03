import styled from 'styled-components';
import { align } from 'sc-companion';

export const Container = styled.div`
    margin: 2rem 0;
    @media screen and (max-width: 39.9375em) {
        margin: 2rem 0;
    }
    ${align({ x: 'center', y: 'center' })}
`;

export const Inner = styled.div`
    max-width: 100%;
    min-width: 20rem;
`;
