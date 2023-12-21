// eslint-disable-next-line import/named
import { DrawerProps } from 'rc-drawer';
import { StyledDrawer, DrowerContent } from './styles';
import { Navigation } from '../Navigation';

type IDrawerProps = DrawerProps & {
  onClickItem?: () => void;
  path: string;
};

export const Drawer: React.FC<IDrawerProps> = ({ path, onClickItem, ...props }) => {
  return (
    <StyledDrawer {...props}>
      <DrowerContent>
        <Navigation path={path} onClickItem={onClickItem} />
      </DrowerContent>
    </StyledDrawer>
  );
};
