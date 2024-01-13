import styled from 'styled-components';

import { Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section``;

export const Content = styled.div`
  display: flex;
  gap: 30px;

  ${Media.down.m} {
    flex-direction: column;
    gap: 37px;
  }
`;

export const Item = styled.div`
  flex: 1 1 100%;
  padding: 40px 20px 35px;
  background-color: ${({ theme }) => theme.palette.colors.lightBlack};
`;

export const ImageWrapper = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 35px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemTitle = styled(Text1)`
  font-size: 31px;
  line-height: 1.29;
  margin-bottom: 25px;
  word-break: break-word;

  ${Media.down.m} {
    font-size: 25px;
  }
`;

export const ItemDescription = styled(Text1)``;
