import styled from 'styled-components';

import { Heading2, Text1 } from '../../ui-kit/Typography';
import { Button } from '../../ui-kit/Button';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  gap: 30px;
`;

export const SliderWrapper = styled.div`
  max-width: 482px;
`;

export const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 480px;
  min-width: 280px;
`;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  line-height: 0.2;
  margin-bottom: 70px;
`;

export const Subtitle = styled(Text1)``;

export const StyledButton = styled(Button)`
  width: 276px;
`;
