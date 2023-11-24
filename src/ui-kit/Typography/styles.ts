/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
// eslint-disable-next-line import/named
import styled, { css, StyledProps } from 'styled-components';

import { TextBaseProps } from './types';

const color = ({ $color, theme }: StyledProps<TextBaseProps>) => {
  return $color ? theme.palette.colors[$color] : theme.palette.colors.secondary;
};

const fontCase = ({ $case }: StyledProps<TextBaseProps>) => {
  return $case ? $case : 'none';
};

const styles = css`
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  text-transform: ${fontCase};
  color: ${color};
`;

export const StyledHeading1 = styled.h1`
  ${styles};
  font-size: 160px;
  line-height: 1.27;
  letter-spacing: -7.5px;
`;

export const StyledHeading2 = styled.h2`
  ${styles};
  font-size: 120px;
  letter-spacing: -9px;
`;

export const StyledHeading3 = styled.h3`
  ${styles};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 50px;
  line-height: 0.62;
`;

export const StyledHeading4 = styled.h4`
  ${styles};
  font-family: e-Ukraine;
  font-size: 25px;
  line-height: 1;
`;

export const StyledHeading5 = styled.h5`
  ${styles};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 32px;
  line-height: 1;
`;

export const StyledText1 = styled.p`
  ${styles};
  font-family: e-Ukraine;
  font-feature-settings:
    'clig' off,
    'liga' off;
  line-height: 1.5;
`;

export const StyledText2 = styled.p`
  ${styles};
  font-family: e-Ukraine;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 20px;
  line-height: 1.5;
`;
