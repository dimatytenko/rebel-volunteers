import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { StyledLayout, Main } from './styles';
import { IAppLayoutProps } from '../../types/layout';
import { Donate, DonatePulsing } from '../../ui-kit/Donate';

export const LayoutComponent: FC<IAppLayoutProps> = ({
  children,
  header,
  footer,
  hideHeader,
  hideFooter,
  theme,
  ...props
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <StyledLayout $theme={theme} {...props}>
      {!hideHeader && header}
      <Main>{children}</Main>

      <Donate />
      <DonatePulsing />
      {!hideFooter && footer}
    </StyledLayout>
  );
};
