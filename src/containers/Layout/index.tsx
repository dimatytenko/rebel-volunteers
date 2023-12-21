import { FC } from 'react';

import { LayoutComponent } from '../../components/Layout';
import { WithChildren } from '../../types/helpers';
import { Header } from './Header';
import { Footer } from './Footer';
import { useDrawer } from '../../hooks/drawer';

export const Layout: FC<WithChildren> = ({ children }) => {
  const { isOpen, toggleDrawer, closeHandler } = useDrawer();

  return (
    <LayoutComponent
      isOpenDrawer={isOpen}
      onToggleDrawer={toggleDrawer}
      onCloseDrawer={closeHandler}
      header={<Header isOpenDrawer={isOpen} onToggleDrawer={toggleDrawer} onCloseDrawer={closeHandler} />}
      footer={<Footer />}
      theme={'primary'}
    >
      {children}
    </LayoutComponent>
  );
};
