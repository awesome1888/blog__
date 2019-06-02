import styled from 'styled-components';
import { withTheme } from '../../style/global.js';
import {
  align,
  media,
} from 'sc-companion';

export const List = withTheme(styled.div`
  ${props => media({ xs: 'padding: 0 2rem;', all: 'padding: 0 4rem;' }, props.theme.grid)}
`);

export const Row = styled.div`
  ${align('top', 'center')}
  flex-wrap: wrap;
`;

export const Container = styled.div`
  padding: 1rem;
`;
