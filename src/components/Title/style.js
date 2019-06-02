import styled from 'styled-components';
// import ornament from '../../images/ornament-c.svg';
import {
  backgroundCover,
  align,
  rectangle,
  mirror,
  flexNoShrink,
} from 'sc-companion';

export const Title = styled.div`
  ${align('center', 'center')}
  padding: 0;
  margin: 0 0 1rem 0;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
`;

// export const Ornament = styled.div`
//   ${rectangle('171px', '50px', 0.45)}
//   ${backgroundCover(ornament)}
//   ${props => props.mirror ? mirror() : ''}
//   flex-shrink: none;
//   opacity: 0.7;
// `;

export const Text = styled.h2`
  margin: 0 0.7rem;
  font-size: 1.5rem;
`;
