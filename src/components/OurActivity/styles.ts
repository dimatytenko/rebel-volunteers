import styled from 'styled-components';

import { Heading2, Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section``;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 70px;

  ${Media.down.m} {
    font-size: 85px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 30px;
  }

  ${Media.down.s} {
    font-size: 50px;
  }

  ${Media.down.xxs} {
    font-size: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 28px;

  ${Media.down.l} {
    flex-direction: column;
    gap: 20px;
  }
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

  ${Media.down.l} {
    max-width: 100%;
    font-size: 14px;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 686px;
  max-height: 519px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
