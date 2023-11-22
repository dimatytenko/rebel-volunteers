import { WithChildren } from '../types/helpers';

export type ThemeType = 'secondary' | 'primary';

export interface IAppLayoutProps extends WithChildren {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  theme?: ThemeType;
}
