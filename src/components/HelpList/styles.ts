import styled from 'styled-components';

import { Heading3, Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section<{ $back: string }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 40px;
  background-image: url(${({ $back }) => $back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${Media.down.m} {
    padding: 10px;
  }
`;

export const Info = styled.div`
  ${Media.down.m} {
    font-size: 14px;
  }
`;

export const Title = styled(Heading3)`
  margin-bottom: 20px;

  ${Media.down.m} {
    font-size: 25px;
  }
`;

export const InfoText = styled(Text1)``;
