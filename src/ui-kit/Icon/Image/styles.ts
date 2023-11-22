import styled from 'styled-components';

export const Icon = styled.img`
  width: ${({ width }) => (width ? width : '25px')}})};
  height: ${({ height }) => (height ? height : '25px')}})};
  object-fit: contain;
  object-position: center;
  overflow: hidden;
`;
