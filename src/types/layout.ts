import { WithChildren } from '../types/helpers';
import { Language } from '../states/language';

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

export interface IHeaderProps extends IDrawer, ISwitchLanguageProps {
  path: string;
}

export type IHeaderContainerProps = Omit<IHeaderProps, 'path' | 'language' | 'onChangeLanguage'>;

export interface ISwitchLanguageProps {
  language: Language | null;
  onChangeLanguage: () => void;
}
