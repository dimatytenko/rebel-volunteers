import styled from 'styled-components';

import { Text1 } from '../../ui-kit/Typography';

export const TeamWrapper = styled.div``;

export const TeamContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
  row-gap: 37px;
`;

export const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 28px;
`;

export const ImageWrapper = styled.div`
  width: 174px;
  height: 174px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextInfo = styled(Text1)<{ $isLink: boolean }>`
  display: block;
  text-align: center;
  text-decoration: ${({ $isLink }) => ($isLink ? 'underline' : 'none')};
  transition: color ${({ theme }) => theme.transition.primary};
`;

export const InfoWrapper = styled.div<{ $isLink: boolean }>`
  position: relative;
  max-width: 135px;

  &:hover {
    ${TextInfo} {
      color: ${({ theme, $isLink }) => ($isLink ? theme.palette.colors.greyHover : theme.palette.colors.secondary)};
    }
  }
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
