import styled from 'styled-components';

import { Heading2, Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section``;

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
  width: 64px;
  max-height: 64px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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
