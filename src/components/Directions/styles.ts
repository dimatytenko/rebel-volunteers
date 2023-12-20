import styled from 'styled-components';

import { Heading2, Heading3, Text1 } from '../../ui-kit/Typography';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(525px, 1fr));
  justify-content: center;
  grid-gap: 30px;
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
`;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 70px;
`;

export const Subtitle = styled(Heading3)`
  margin-bottom: 25px;
`;

export const StyledText = styled(Text1)``;
