import styled from 'styled-components';

import { scrollStyles } from '../../ui-kit/theme/scroll';

export const Wrapper = styled.section`
  width: 100%;
`;

export const WrapperContent = styled.div`
  ${scrollStyles}
  display: flex;
  justify-content: center;
  overflow-x: auto;
`;

export const ImageWrapper = styled.div`
  flex: 0 0 276px;
  height: 184px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
