import styled from 'styled-components';

import { Heading2, Heading3, Heading5, Text1 } from '../../ui-kit/Typography';
import { Button } from '../../ui-kit/Button';

export const PassedWrapper = styled.div``;

export const ContentWrapper = styled.div``;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(379px, 1fr));
  justify-content: center;
  grid-column-gap: 28px;
  grid-row-gap: 60px;
  margin-bottom: 60px;
`;

export const Card = styled.div`
  width: 379px;
  height: 379px;
`;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  line-height: 0.2;
  margin-bottom: 70px;
`;

export const Subtitle = styled(Heading3)``;

export const ImageWrapper = styled.div`
  max-width: 379px;
  max-height: 250px;
  overflow: hidden;
  margin-bottom: 33px;
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
`;

export const Description = styled(Heading5)``;

export const BottomWrapper = styled.div`
  max-width: 373px;
  margin: auto;
`;

export const BottomText = styled(Text1)`
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  width: 276px;
`;
