import styled from 'styled-components';

import { Heading2, Text1 } from '../../ui-kit/Typography';

export const Wrapper = styled.div``;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 70px;
`;

export const ImageWrapper = styled.div`
  min-width: 64px;
`;

export const Image = styled.img``;

export const TextLink = styled(Text1)`
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 0%;
    height: 1.5px;
    background-color: ${({ theme }) => theme.palette.colors.secondary};
    transition: all ${({ theme }) => theme.transition.primary};
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 25px;
    width: 0%;
    height: 1.5px;
    background-color: ${({ theme }) => theme.palette.colors.secondary};
    transition: all ${({ theme }) => theme.transition.primary};
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 38px;
  max-width: 378px;

  &:hover ${TextLink} {
    &:before {
      width: 100%;
    }
    &:after {
      width: 100%;
    }
  }
`;
