/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
// eslint-disable-next-line import/named
import styled, { css, StyledProps } from 'styled-components';

import { StyledSvgIconProps } from './types';

const getColor = ({ theme, color, defaultColor }: { theme: any; color?: string; defaultColor: string }) => {
  return color ? theme.palette.colors[color] : defaultColor;
};

const stroke = ({ theme, stroke }: StyledProps<StyledSvgIconProps>) => {
  return getColor({
    theme,
    color: stroke,
    defaultColor: theme.palette.colors.none,
  });
};

export const fill = ({ theme, fill }: StyledProps<StyledSvgIconProps>) => {
  return getColor({
    theme,
    color: fill,
    defaultColor: theme.palette.colors.secondary,
  });
};

export const StyledSvg = styled.svg`
  & > * {
    stroke: ${stroke};
  }
  & > path {
    ${({ strokeWidth }) =>
      strokeWidth &&
      css`
        stroke-width: ${strokeWidth};
      `};
  }
  fill: ${fill};
`;

export const StyledPath = styled.path`
  fill: ${fill};
  stroke: ${stroke};
`;
