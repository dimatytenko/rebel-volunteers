import styled from 'styled-components';

import { Heading2, Text1 } from '../../ui-kit/Typography';
import { Button } from '../../ui-kit/Button';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  gap: 30px;

  ${Media.down.l} {
    flex-direction: column-reverse;
    gap: 20px;
  }
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

  ${Media.down.l} {
    max-width: 100%;
    gap: 20px;
  }

  ${Media.down.m} {
    gap: 20px;
  }
`;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  line-height: 0.2;
  margin-bottom: 70px;

  ${Media.down.m} {
    font-size: 85px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 50px;
  }

  ${Media.down.s} {
    font-size: 50px;
    margin-bottom: 30px;
  }

  ${Media.down.xxs} {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

export const Subtitle = styled(Text1)`
  ${Media.down.m} {
    font-size: 14px;
  }
`;

export const StyledButton = styled(Button)`
  width: 276px;

  ${Media.down.m} {
    width: 171px;
    > svg {
      display: none;
    }
  }

  ${Media.down.xxs} {
    width: 139px;
  }
`;
