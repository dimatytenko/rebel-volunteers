import styled from 'styled-components';

import { Text1, Heading3 } from '../../ui-kit/Typography';

export const Wrapper = styled.section``;

export const Subtitle = styled(Text1)`
  max-width: 582px;
  margin-left: auto;
  margin-bottom: 70px;
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;
`;

export const Item = styled.div`
  width: 378px;
  padding: 0 20px 30px;
  background-color: ${({ theme }) => theme.palette.colors.lightBlack};
`;

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 92px;
`;

export const Number = styled(Heading3)`
  font-size: 250px;
  font-weight: 300;
  color: ${({ theme }) => theme.palette.colors.redDark};
  line-height: 0.3;
}
`;

export const ItemTitle = styled(Text1)`
  font-size: 31px;
  line-height: 1.29;
  margin-bottom: 25px;
`;

export const ItemDescription = styled(Text1)``;
