import styled from 'styled-components';

import { ThemeType } from '../../types/layout';

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
  padding: 15px 0;
`;

// Footer
export const StyledFooter = styled.footer`
  padding: 15px 0;
`;
