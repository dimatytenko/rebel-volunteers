import styled from 'styled-components';

import { Heading2, Heading3, Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(525px, 1fr));
  justify-content: center;
  grid-gap: 30px;

  ${Media.down.s} {
    grid-gap: 17px;
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  owerflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 100px 0 40px;

  ${Media.down.s} {
    padding: 0 15px;
  }
`;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 70px;

  ${Media.down.m} {
    font-size: 85px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  ${Media.down.s} {
    font-size: 50px;
  }

  ${Media.down.xxs} {
    font-size: 40px;
  }
`;

export const Subtitle = styled(Heading3)`
  margin-bottom: 25px;

  ${Media.down.m} {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

export const StyledText = styled(Text1)`
  ${Media.down.m} {
    font-size: 14px;
  }

  ${Media.down.xxs} {
    font-size: 10px;
  }
`;
