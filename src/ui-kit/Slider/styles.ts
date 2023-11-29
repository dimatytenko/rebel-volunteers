import styled, { css } from 'styled-components';
import { Swiper } from 'swiper/react';

import { SliderProps } from './types';

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
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

export const SliderWrapper = styled.div<{ $isGrid?: boolean }>`
  position: relative;
  padding: 0 ${({ $isGrid }) => ($isGrid ? `78px` : `0`)};
`;

export const StyledSwiper = styled(Swiper)<SliderProps>`
  width: 100%;
  max-width: ${({ $isGrid }) => ($isGrid ? `1194px` : `100%`)};

  .swiper-wrapper {
    ${({ $isGrid }) => ($isGrid ? gridStyles : `undefined`)};
  }
`;

export const ArrowsWrapper = styled.div<{ $isGrid?: boolean }>`
  ${({ $isGrid }) => (!$isGrid ? ArrowsWrapperStyles : `undefined`)};
`;

const ArrowButtonStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

export const ArrowButtonWrapper = styled.div<{ $isGrid?: boolean; $position?: 'right' | 'left' }>`
  ${({ $isGrid }) => ($isGrid ? ArrowButtonStyles : `undefined`)};
  ${({ $position }) => ($position === 'right' ? `right: 0;` : `left: 0;`)};
`;
