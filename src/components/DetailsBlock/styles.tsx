import styled from 'styled-components';

import { Heading3Bold, Text2Bold, Text1, Text1Slim } from '../../ui-kit/Typography';
import { IconSvg } from '../../ui-kit/Icon/Svg';

export const DetailsWrapper = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  max-width: 582px;
  max-height: 564px;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled(Heading3Bold)`
  margin-bottom: 33px;
`;

export const LeftContent = styled.div`
  flex-grow: 1;
  padding: 20px 102px 49px 72px;
  background-color: ${({ theme }) => theme.palette.colors.lightBlack};
`;

export const DetailsItem = styled.div`
  display: flex;
  gap: 15px;
`;

export const DetailImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  overflow: hidden;
`;

export const DetailImage = styled.img``;

export const DetailInfo = styled.div``;

export const DetailTitle = styled(Text2Bold)``;

export const DetailPrev = styled(Text1)`
  text-transform: uppercase;
  margin-right: 4px;
`;

export const DetailNumber = styled(Text1Slim)``;

export const DetailNumberWrapper = styled.div`
  display: flex;
`;

export const CppyIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`;

export const CopyIcon = styled(IconSvg).attrs({
  type: 'copy',
  width: '16px',
  height: '18px',
  viewBox: '0 0 16 18',
})`
  cursor: pointer;
  transition: fill ${({ theme }) => theme.transition.primary};

  &:hover {
    fill: ${({ theme }) => theme.palette.colors.greyHover};
  }
`;

export const NumbersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLine = styled.div`
  margin-top: 18px;
  border-top: 1px solid ${({ theme }) => theme.palette.colors.secondary};
  width: 100%;
  margin-bottom: 18px;
`;
