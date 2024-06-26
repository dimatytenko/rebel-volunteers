import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

import { IconSvg } from '../Icon/Svg';
import { DirectionArrowType } from './types';
import { Text4Slim, Text1 } from '../Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const StyledLink = styled(RouteLink)<{ $active?: boolean }>`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: ${({ $active }) => ($active ? '100%' : '0%')};
    height: 1.5px;
    background-color: ${({ theme }) => theme.palette.colors.secondary};
    transition: all ${({ theme }) => theme.transition.primary};
  }

  &:hover:before {
    width: 100%;
  }
`;

export const ButtonBase = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.palette.colors.red};
  transition: all ${({ theme }) => theme.transition.primary};

  &:hover {
    background-color: ${({ theme }) => theme.palette.colors.redHover};
  }
`;

export const ALink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

export const LinkRoute = styled(RouteLink)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

export const ArrowButtonBase = styled.button`
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.colors.grey};
  transition: all ${({ theme }) => theme.transition.primary};

  &:hover {
    background-color: ${({ theme }) => theme.palette.colors.systemHover};
  }
`;

export const ArrowButtonIcon = styled(IconSvg).attrs({
  type: 'arrow',
  width: '24px',
  height: '24px',
  viewBox: '0 0 10 17',
  fill: 'none',
  stroke: 'primary',
})<{ direction: DirectionArrowType }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ direction }) =>
    direction === 'left' ? 'rotate(180deg) translate(50%, 50%)' : 'rotate(0deg) translate(-50%, -50%)'};
`;

export const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px;
  width: 100%;
  font-family: e-Ukraine;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 20px;
  line-height: 1;
  background-color: ${({ theme }) => theme.palette.colors.red};
  transition: all ${({ theme }) => theme.transition.primary};

  ${Media.down.m} {
    font-size: 14px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.colors.redHover};
  }
`;

export const ArrowShortButtonIcon = styled(IconSvg).attrs({
  type: 'arrow-short',
  width: '20px',
  height: '20px',
  viewBox: '0 0 17 17',
  fill: 'none',
  stroke: 'secondary',
})``;

export const StyledTextLink = styled(Text4Slim)`
  transition: all ${({ theme }) => theme.transition.primary};

  ${Media.down.m} {
    font-size: 14px;
  }
`;

export const WrapperLinkText = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 13px;

  &:hover ${StyledTextLink} {
    color: ${({ theme }) => theme.palette.colors.greyHover};
  }
`;

export const StyledNavLinkText = styled(Text1)`
  ${Media.down.l} {
    font-size: 43px;
    text-transform: uppercase;
    line-height: 1;
  }

  ${Media.down.xxs} {
    font-size: 36px;
  }
`;
