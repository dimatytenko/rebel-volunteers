import styled, { keyframes } from 'styled-components';

import { IconSvg } from '../../ui-kit/Icon/Svg';

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
  position: fixed;
  top: 164px;
  left: 50%;
  transform: translateX(+353px);
  width: 208px;
  height: 208px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.colors.red};
  overflow: hidden;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.primary};

  &:hover {
    background-color: ${({ theme }) => theme.palette.colors.redHover};

    ${RotateWrapper} {
      animation-play-state: paused;
    }
  }
`;

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
`;