import styled from 'styled-components';

import { Heading3Bold, Text2Bold, Text1, Text1Slim } from '../../ui-kit/Typography';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { Media } from '../../ui-kit/theme/breakpoints';

export const DetailsWrapper = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  display: block;
  max-width: 582px;
  max-height: 564px;
  overflow: hidden;

  ${Media.down.m} {
    display: none;
  }
`;

export const ImageMobileWrapper = styled.div`
  display: none;

  ${Media.down.m} {
    display: block;
    max-width: 234px;
    max-height: 227px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled(Heading3Bold)`
  margin-bottom: 33px;

  ${Media.down.m} {
    font-size: 25px;
    margin-bottom: 20px;
  }
`;

export const LeftContent = styled.div`
  flex-grow: 1;
  padding: 20px 102px 49px 72px;
  background-color: ${({ theme }) => theme.palette.colors.lightBlack};

  ${Media.down.m} {
    padding: 0 0 40px 0;
  }
`;

export const DetailsItem = styled.div`
  display: flex;
  gap: 15px;

  ${Media.down.m} {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const DetailImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  overflow: hidden;

  ${Media.down.m} {
    width: 55px;
    height: 55px;
  }
`;

export const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetailInfo = styled.div``;

export const DetailTitle = styled(Text2Bold)`
  ${Media.down.m} {
    tfont-size: 25px;
    margin-bottom: 5px;
    text-align: center;
  }
`;

export const DetailPrev = styled(Text1)`
  text-transform: uppercase;
  margin-right: 4px;

  ${Media.down.m} {
    font-size: 12px;
  }
`;

export const DetailNumber = styled(Text1Slim)`
  ${Media.down.m} {
    font-size: 12px;
  }
`;

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

  ${Media.down.m} {
    width: 80%;
    margin: 20px auto;
  }
`;
