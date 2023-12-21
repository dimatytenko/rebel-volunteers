import styled from 'styled-components';

import { Heading2, Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.div``;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 70px;
  overflow-wrap: break-word;

  ${Media.down.m} {
    font-size: 85px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 27px;
  }

  ${Media.down.s} {
    font-size: 50px;
  }

  ${Media.down.xxs} {
    font-size: 40px;
  }
`;

export const ImageWrapper = styled.div`
  min-width: 64px;
`;

export const Image = styled.img``;

export const TextLink = styled(Text1)``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 38px;
  max-width: 378px;

  &:hover ${TextLink} {
    text-decoration: underline;
  }
`;
