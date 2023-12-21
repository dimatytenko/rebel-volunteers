import { WithChildren } from '../types/helpers';

export type ThemeType = 'secondary' | 'primary';

interface IDrawer {
  isOpenDrawer: boolean;
  onToggleDrawer: () => void;
  onCloseDrawer: () => void;
}
export interface IAppLayoutProps extends IDrawer, WithChildren {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  theme?: ThemeType;
}

export interface IHeaderProps extends IDrawer {
  path: string;
}

export type IHeaderContainerProps = Omit<IHeaderProps, 'path'>;
