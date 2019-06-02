import styled from 'styled-components'
import {
  flexNoShrink,
  rectangle,
  round,
} from 'sc-companion';
import Img from 'gatsby-image';

export const Container = styled.div`
  ${round()}
  width: 12rem;
  flex-shrink: 0;
  padding: 0.2rem;
  background-color: white;
  overflow: hidden;
  user-select: none;
`;

export const Image = styled(Img)`
  height: 100%;
  width: 100%;
  ${round()}
`;
