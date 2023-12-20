import styled from 'styled-components';

import { Heading2, Text1 } from '../../ui-kit/Typography';

export const Wrapper = styled.div``;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 70px;
`;

export const Content = styled.div`
  display: flex;
  gap: 28px;
`;

export const SliderWrapper = styled.div`
  max-width: 686px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Subtitle = styled(Text1)`
  max-width: 480px;
  min-width: 280px;
`;
