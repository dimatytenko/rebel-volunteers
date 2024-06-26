import styled from 'styled-components';

import { Heading2, Heading5, Text1 } from '../../ui-kit/Typography';
import { Button } from '../../ui-kit/Button';
import { Media } from '../../ui-kit/theme/breakpoints';

export const PassedWrapper = styled.section``;

export const ContentWrapper = styled.div``;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 70px;

  ${Media.down.m} {
    font-size: 85px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 30px;
  }

  ${Media.down.s} {
    font-size: 50px;
  }

  ${Media.down.xxs} {
    font-size: 40px;
  }
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(378px, 1fr));
  justify-content: center;
  grid-column-gap: 28px;
  grid-row-gap: 60px;
  margin-bottom: 60px;

  ${Media.down.xl} {
    grid-template-columns: repeat(auto-fit, minmax(174px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 35px;
    margin-bottom: 50px;
  }

  ${Media.down.xxs} {
    grid-template-columns: repeat(auto-fit, minmax(139px, 1fr));
  }
`;

export const Card = styled.div`
  width: 378px;
  height: 378px;

  ${Media.down.xl} {
    width: 174px;
    height: 184px;
  }

  ${Media.down.xxs} {
    width: 139px;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 379px;
  max-height: 250px;
  overflow: hidden;
  margin-bottom: 33px;

  ${Media.down.xl} {
    margin-bottom: 10px;
    height: 120px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextCount = styled(Text1)`
  font-size: 50px;
  color: ${({ theme }) => theme.palette.colors.red};
  line-height: 1;

  ${Media.down.xl} {
    font-size: 32px;
  }
`;

export const Description = styled(Heading5)`
  ${Media.down.xl} {
    font-size: 17px;
  }
`;

export const BottomWrapper = styled.div`
  ${Media.down.m} {
    font-size: 14px;
  }
`;

export const BottomText = styled(Text1)`
  margin-bottom: 30px;
`;

export const StyledButton = styled(Button)`
  width: 276px;

  ${Media.down.xl} {
    width: 171px;
    > svg {
      display: none;
    }
  }

  ${Media.down.xxs} {
    width: 139px;
  }
`;
