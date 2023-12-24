import styled from 'styled-components';

import { Heading3, Text1 } from '../../ui-kit/Typography';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InfoItem = styled.div<{ back: string }>`
  padding: 0 0 25px 25px;
  background-image: url(${({ back }) => back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Title = styled(Heading3)`
  margin-bottom: 25px;
`;

export const Info = styled.div``;

export const InfoText = styled(Text1)``;
