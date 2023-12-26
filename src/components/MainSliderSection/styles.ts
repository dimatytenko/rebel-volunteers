import styled from 'styled-components';

export const Wrapper = styled.section``;

export const SliderWrapper = styled.div``;

export const ImageWrapper = styled.div<{ $height: number }>`
  width: 174px;
  height: ${({ $height }) => $height}px;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
