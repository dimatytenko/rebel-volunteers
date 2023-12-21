import styled, { keyframes } from 'styled-components';

import { IconSvg } from '../../ui-kit/Icon/Svg';
import { Media } from '../theme/breakpoints';

export const StyledIcon = styled(IconSvg).attrs({
  type: 'arrow-long',
  width: '34px',
  height: '17px',
  viewBox: '0 0 34 17',
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all ${({ theme }) => theme.transition.primary};
`;

export const StyledHeart = styled(IconSvg).attrs({
  type: 'donate-heart',
  width: '64px',
  height: '64px',
  viewBox: '0 0 64 64',
  fill: 'none',
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all ${({ theme }) => theme.transition.primary};
`;

export const StyledTextIcon = styled(IconSvg).attrs({
  type: 'donate',
  width: '208px',
  height: '208px',
  viewBox: '0 0 208 208',
})`
  transition: all ${({ theme }) => theme.transition.primary};
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const RotateWrapper = styled.div`
  width: 100%;
  height: 100%;
  animation: ${rotate} 10s linear infinite;
`;

export const DonateWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 60px;
  right: 0;
  width: 208px;
  height: 208px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.colors.red};
  overflow: hidden;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.primary};

  ${Media.down.l} {
    right: unset;
    top: unset;
    left: 16px;
    bottom: 120px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.colors.redHover};

    ${RotateWrapper} {
      animation-play-state: paused;
    }
  }
`;

export const DonateHeartWrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 50%;
  bottom: 20px;
  transform: translateX(+620px);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.colors.red};
  overflow: hidden;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.primary};
  ${StyledTextIcon} {
    opacity: 0;
    pointer-events: none;
  }
  ${StyledIcon} {
    opacity: 0;
    pointer-events: none;
  }

  ${Media.down.xxl} {
    left: unset;
    right: 20px;
    transform: none;
  }

  &:hover {
    width: 208px;
    height: 208px;
    transform: translateX(+488px);
    background-color: ${({ theme }) => theme.palette.colors.redHover};

    ${Media.down.xxl} {
      left: unset;
      right: 20px;
      transform: none;
    }

    ${StyledTextIcon} {
      opacity: 1;
      pointer-events: auto;
    }
    ${StyledHeart} {
      opacity: 0;
      pointer-events: none;
    }
    ${StyledIcon} {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

const pulsing = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const DonateWrapperPulsing = styled.div`
  position: fixed;
  z-index: 100;
  top: 400px;
  left: 50%;
  transform: translateX(+353px);
`;

export const DonatePulsingButton = styled.div`
  width: 208px;
  height: 208px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.colors.red};
  overflow: hidden;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.primary};
  animation: ${pulsing} 700ms ease-in-out infinite;

  &:hover {
    background-color: ${({ theme }) => theme.palette.colors.redHover};
    animation-play-state: paused;
  }
`;
