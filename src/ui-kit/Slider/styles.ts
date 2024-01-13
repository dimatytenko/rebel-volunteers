import styled, { css } from 'styled-components';
import { Swiper } from 'swiper/react';

import { SliderProps } from './types';
import { Media } from '../theme/breakpoints';

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-template-rows: auto auto auto;
  grid-auto-flow: column;
  grid-column-gap: 22px;
  grid-row-gap: 30px;
`;

const gridStylesFull = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  grid-template-rows: auto auto auto;
  grid-auto-flow: column;
  grid-column-gap: 22px;
  grid-row-gap: 30px;
`;

const ArrowsWrapperStyles = css`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin-top: 35px;
`;

export const SliderWrapper = styled.div<{ $isMain?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  padding: 0 ${({ $isMain }) => ($isMain ? `78px` : `0`)};

  ${Media.down.s} {
    padding: 0;
  }
`;

export const StyledSwiper = styled(Swiper)<SliderProps>`
  width: 100%;
  max-width: ${({ $isMain }) => ($isMain ? `1194px` : `100%`)};

  .swiper-wrapper {
    ${({ $isGrid, $isGridFull }) => ($isGrid ? gridStyles : $isGridFull ? gridStylesFull : `undefined`)};
  }
`;

export const ArrowsWrapper = styled.div<{ $isMain?: boolean }>`
  ${({ $isMain }) => (!$isMain ? ArrowsWrapperStyles : `undefined`)};

  ${Media.down.s} {
    ${ArrowsWrapperStyles};
  }
`;

const ArrowButtonStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

export const ArrowButtonWrapper = styled.div<{
  $isMain?: boolean;
  $position?: 'right' | 'left';
}>`
  ${Media.up.s} {
    ${({ $isMain }) => ($isMain ? ArrowButtonStyles : `undefined`)};
  }

  ${({ $position }) => ($position === 'right' ? `right: 0;` : `left: 0;`)};
`;
