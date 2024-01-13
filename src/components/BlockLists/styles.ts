import styled from 'styled-components';

import { Heading3, Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section``;

export const BlockListsContent = styled.div`
  display: flex;
  gap: 30px;

  ${Media.down.m} {
    flex-direction: column;
    gap: 15px;
  }
`;

export const BlockListsItem = styled.div`
  flex: 1 1 378px;
`;

export const TopBlock = styled.div<{ $back: string }>`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 242px;
  background-image: url(${({ $back }) => $back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 30px 13px;
`;

export const BlockTitle = styled(Heading3)`
  font-size: 40px;
  word-break: break-word;

  ${Media.down.m} {
    font-size: 25px;
  }
`;

export const ListBlock = styled.div`
  padding: 20px 13px 25px;
  background-color: ${({ theme }) => theme.palette.colors.lightBlack};
  min-height: 505px;

  ${Media.down.m} {
    min-height: 195px;
  }
`;

export const List = styled.ul<{ $isOpen: boolean }>`
  margin-bottom: 15px;
  overflow: hidden;
  height: ${({ $isOpen }) => ($isOpen ? 'auto' : '410px')};

  ${Media.down.m} {
    height: ${({ $isOpen }) => ($isOpen ? 'auto' : '100px')};
  }
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 15px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: inline-block;
    background-color: ${({ theme }) => theme.palette.colors.secondary};
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

export const ListItemText = styled(Text1)`
  ${Media.down.m} {
    font-size: 14px;
  }
`;

export const ReadMoreButton = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0%;
    height: 1.5px;
    background-color: ${({ theme }) => theme.palette.colors.secondary};
    transition: all ${({ theme }) => theme.transition.primary};
  }

  &:hover:before {
    width: 100%;
  }
`;
