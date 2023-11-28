import styled from 'styled-components';

import { Heading2, Text1 } from '../../ui-kit/Typography';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  gap: 30px;
`;

export const SliderWrapper = styled.div`
  max-width: 482px;
`;

export const TextWrapper = styled.div`
  position: relative;
  top: -70px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 480px;
  min-width: 280px;
`;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  line-height: 1.3;
`;

export const Subtitle = styled(Text1)``;
