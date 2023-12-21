import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { StyledLayout, Main } from './styles';
import { IAppLayoutProps } from '../../types/layout';

import { Drawer } from '../Drawer';

export const LayoutComponent: FC<IAppLayoutProps> = ({
  children,
  header,
  footer,
  hideHeader,
  hideFooter,
  theme,
  isOpenDrawer,
  onToggleDrawer,
  onCloseDrawer,
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

      {!hideFooter && footer}

      <Drawer
        open={isOpenDrawer}
        onClose={onCloseDrawer}
        onClickItem={onToggleDrawer}
        path={pathname}
        width={'100%'}
        placement={'right'}
      />
    </StyledLayout>
  );
};
