import styled from 'styled-components';

import { ThemeType } from '../../types/layout';
import { Heading4, Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';
import { Logo } from '../../ui-kit/Logo';

export const StyledLayout = styled.div<{ $theme?: ThemeType }>`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme, $theme }) => theme.palette.colors[$theme || 'primary']};
`;

export const Main = styled.main<{ $isMobile?: boolean }>`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
`;

// Header
export const StyledHeader = styled.header`
  padding: 30px 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;
`;

export const StyledLogo = styled(Logo)`
  width: 78px;
  height: 78px;

  ${Media.down.l} {
    position: relative;
    z-index: 9990;
    width: 48px;
    height: 48px;
  }
`;

export const HeaderRightContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${Media.down.l} {
    display: none;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: 6px;
`;

export const Menu = styled.div`
  display: none;

  ${Media.down.l} {
    position: relative;
    z-index: 9990;
    display: block;
    margin-left: auto;
  }
`;

// Footer
export const StyledFooter = styled.footer`
  padding: 30px 0;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 28px;
`;

export const FooterRightContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FooterTopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FooterBottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled(Heading4)`
  text-transform: uppercase;
`;

export const TextReserved = styled(Text1)`
  position: relative;
  padding-left: 10px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 70%;
    background-color: ${({ theme }) => theme.palette.colors.secondary};
  }
`;
