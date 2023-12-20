import styled from 'styled-components';

import { Heading2, Text1, Text2 } from '../../ui-kit/Typography';
import { Button } from '../../ui-kit/Button';

export const CollectionWrapper = styled.div``;

export const CollectionContent = styled.div<{ $img: string }>`
  position: relative;
  background-image: url(${({ $img }) => $img});
  background-size: 786px 303px;
  background-position: right bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  max-width: 840px;
`;

export const CollectionTitle = styled(Heading2)`
  text-transform: uppercase;
`;

export const DescriptionWrapper = styled.div`
  max-width: 408px;
`;

export const CollectionDescription = styled(Text1)``;

export const StyledButton = styled(Button)`
  width: 218px;
`;

export const Label = styled.div`
  position: absolute;
  bottom: 39px;
  left: 306px;
  border: 2px solid ${({ theme }) => theme.palette.colors.secondary};
  max-width: 276px;
  padding: 14px 34px;
`;

export const LabeText = styled(Text2)``;
