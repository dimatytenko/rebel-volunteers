import styled from 'styled-components';

import { Text1, Heading3 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section``;

export const Subtitle = styled(Text1)`
  max-width: 582px;
  margin-left: auto;
  margin-bottom: 70px;

  ${Media.down.m} {
    font-size: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;

  ${Media.down.m} {
    justify-content: center;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 378px;
  min-height: 486px;
  padding: 0 20px 20px;
  background-color: ${({ theme }) => theme.palette.colors.lightBlack};

  ${Media.down.m} {
    min-height: 276px;
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 130px;
`;

export const Number = styled(Heading3)`
  font-size: 250px;
  font-weight: 300;
  color: ${({ theme }) => theme.palette.colors.redDark};
  line-height: 0.3;

  ${Media.down.xs} {
    font-size: 180px;
  }
`;

export const ItemTitle = styled(Text1)`
  font-size: 31px;
  line-height: 1.29;
  margin-bottom: 30px;

  ${Media.down.xs} {
    font-size: 25px;
  }
`;

export const ItemDescription = styled(Text1)`
  font-size: 16px;

  ${Media.down.m} {
    font-size: 12px;
  }
`;
