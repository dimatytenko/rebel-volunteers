import styled from 'styled-components';

import { Text3Bold } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';
import { Logo } from '../../ui-kit/Logo';

export const StyledLogo = styled(Logo)`
  width: 204px;
  height: 204px;

  ${Media.down.m} {
    width: 50px;
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  padding: 38px 72px;
  background-color: ${({ theme }) => theme.palette.colors.lightBlack};

  ${Media.down.m} {
    padding: 10px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;

  ${Media.down.l} {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoTitle = styled(Text3Bold)`
  text-transform: capitalize;

  ${Media.down.l} {
    margin-bottom: 20px;
  }

  ${Media.down.m} {
    font-size: 25px;
  }
`;

export const SocialWrapper = styled.div`
  ${Media.down.l} {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Media.down.m} {
    gap: 5px;
  }
`;

export const MobileWrapper = styled.div`
  display: none;

  ${Media.down.m} {
    display: block;
  }
`;

export const DesktopWrapper = styled.div`
  display: block;

  ${Media.down.m} {
    display: none;
  }
`;
