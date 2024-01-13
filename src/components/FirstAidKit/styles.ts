import styled from 'styled-components';

import { Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;

  ${Media.down.l} {
    flex-direction: column-reverse;
  }
`;

export const Subtitle = styled(Text1)`
  font-size: 24px;
  max-width: 621px;
  margin-bottom: 70px;
`;

export const List = styled.ul`
  padding: 50px 120px 50px 72px;
  background-color: ${({ theme }) => theme.palette.colors.lightBlack};

  ${Media.down.m} {
    padding: 10px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 420px;
  min-height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Item = styled.li`
  position: relative;
  padding-left: 15px;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    display: inline-block;
    background-color: ${({ theme }) => theme.palette.colors.secondary};
    width: 6px;
    height: 2px;
  }
`;

export const ItemText = styled(Text1)`
  ${Media.down.m} {
    font-size: 12px;
  }
`;
