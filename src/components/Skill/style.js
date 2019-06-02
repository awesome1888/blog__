import styled, { keyframes } from 'styled-components';
import {
  rectangle,
  absoluteCover,
  backgroundCover,
  round,
  helvetica,
  ellipsis,
  media,
} from 'sc-companion';
import { withTheme } from '../../style/global.js';

export const animationStroke = keyframes`
  from {
    stroke-dasharray: 0 100;
  }
`;

export const Skill = styled.div`
`;

export const Glyph = withTheme(styled.div`
  ${props => media({ xs: rectangle(null, '7rem'), all: rectangle(null, '10rem') }, props.theme.grid)}
  position: relative;
  z-index: 10;
`);

export const Donut = styled.svg`
  display: block;
  ${absoluteCover()}
`;

export const ProgressBackground = withTheme(styled.path`
  stroke: ${props => props.theme.color.gray};
`);

export const Progress = withTheme(styled.path`
  stroke-linecap: butt;
  stroke: ${props => props.theme.color.skill};
  animation: ${animationStroke} 2s ease-out forwards;
`);

export const LogoFrame = styled.div`
  ${rectangle(null, '100%')}
  padding: 1.2rem;
`;

export const Logo = styled.div`
  ${props => rectangle(props.iHeight ? props.iHeight : '100%', '100%')}
  ${props => props.iRound ? round() : ''}
  ${props => backgroundCover(props.src)}
  overflow: hidden;
  ${props => props.iOffs ? `margin-top: ${props.iOffs}` : ''}
  ${props => props.iOffsH ? `margin-left: ${props.iOffsH}` : ''}
`;

export const Label = withTheme(styled.div`
  text-align: center;
  margin: 0rem 1rem 0 1rem;
  padding: 0.4rem 0.5rem 0.1rem 0.5rem;
  position: relative;
  z-index: 999;
  background-color: white;
`);

export const Technology = styled.div`
  line-height: 100%;
  ${props => props.size ? `font-size: ${props.size};` : ''}
  height: 20px;
  ${ellipsis()}
`;
