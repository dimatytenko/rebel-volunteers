import styled from 'styled-components';

import { Heading3, Text1 } from '../../ui-kit/Typography';

export const Wrapper = styled.section<{ $back: string }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 40px;
  background-image: url(${({ $back }) => $back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Info = styled.div``;

export const Title = styled(Heading3)`
  margin-bottom: 20px;
`;

export const InfoText = styled(Text1)``;
