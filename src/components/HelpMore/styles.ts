import styled from 'styled-components';

import { Text1, Heading3 } from '../../ui-kit/Typography';

export const Wrapper = styled.section``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Item = styled.div<{ $back: string }>`
  padding: 20px 40px 40px;
  background-image: url(${({ $back }) => $back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ItemTitle = styled(Heading3)`
  margin-bottom: 25px;
`;

export const ItemText = styled(Text1)`
  max-width: 613px;
`;
