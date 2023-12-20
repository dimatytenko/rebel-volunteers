import styled from 'styled-components';

import { Heading2, Text1 } from '../../ui-kit/Typography';

export const TeamWrapper = styled.div``;

export const TeamContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(174px, 1fr));
  justify-content: center;
  grid-column-gap: 25px;
  grid-row-gap: 37px;
`;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 70px;
`;

export const TextInfo = styled(Text1)<{ $isLink: boolean }>`
  display: block;
  text-align: center;
  transition: color ${({ theme }) => theme.transition.primary};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transition.primary};
`;

export const TeamMemberWrapper = styled.div<{ $isLink: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 28px;

  &:hover {
    ${TextInfo} {
      color: ${({ theme, $isLink }) => ($isLink ? theme.palette.colors.greyHover : theme.palette.colors.secondary)};
      text-decoration: ${({ $isLink }) => ($isLink ? 'underline' : 'none')};
    }

    ${Image} {
      transform: scale(1.1);
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 174px;
  height: 174px;
  border-radius: 50%;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  max-width: 135px;
`;

export const Plug = styled.div`
  height: 24px;
`;

export const ALink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
