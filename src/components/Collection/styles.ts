import styled from 'styled-components';

import { Heading2, Text1, Text2 } from '../../ui-kit/Typography';
import { Button } from '../../ui-kit/Button';
import { Media } from '../../ui-kit/theme/breakpoints';

export const CollectionWrapper = styled.section``;

export const CollectionContent = styled.div<{ $img?: string }>`
  position: relative;
  background-image: url(${({ $img }) => $img});
  background-size: contain;
  background-position: right bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${Media.down.m} {
    gap: 0;
    /* background-size: 376px 144px; */
    background-size: contain;
    background-position: right 80%;
  }

  ${Media.down.xs} {
    /* background-size: 276px 144px; */
    background-size: contain;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 840px;
`;

export const CollectionTitle = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 36px;

  ${Media.down.l} {
    font-size: 110px;
  }

  ${Media.down.m} {
    font-size: 85px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 15px;
    overflow-wrap: break-word;
  }

  ${Media.down.s} {
    font-size: 50px;
  }

  ${Media.down.xxs} {
    font-size: 40px;
  }
`;

export const DescriptionWrapper = styled.div`
  max-width: 408px;

  ${Media.down.m} {
    margin-bottom: 176px;
  }
`;

export const CollectionDescription = styled(Text1)`
  ${Media.down.m} {
    font-size: 14px;
  }
`;

export const StyledButton = styled(Button)`
  width: 218px;
`;

export const Label = styled.div`
  position: absolute;
  top: 294px;
  right: 0;
  border: 2px solid ${({ theme }) => theme.palette.colors.secondary};
  max-width: 276px;
  padding: 14px 34px;
  background-color: ${({ theme }) => theme.palette.colors.blackOpacity};

  ${Media.down.m} {
    display: none;
  }
`;

export const LabeText = styled(Text2)``;
