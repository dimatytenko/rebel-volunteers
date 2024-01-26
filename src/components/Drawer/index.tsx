// eslint-disable-next-line import/named
import { DrawerProps } from 'rc-drawer';

import { StyledDrawer, DrowerContent, Wrapper, StyledLinkButton, Divider } from './styles';
import { Navigation } from '../Navigation';
import { Social } from '../Social';
import { SOCIAL } from '../../constants/links';
import { IconSvg } from '../../ui-kit/Icon/Svg';

type IDrawerProps = DrawerProps & {
  onClickItem?: () => void;
  path: string;
};

export const Drawer: React.FC<IDrawerProps> = ({ path, onClickItem, ...props }) => {
  return (
    <StyledDrawer {...props}>
      <DrowerContent>
        <Wrapper>
          <Divider />
        </Wrapper>
        <Wrapper></Wrapper>
        <Navigation path={path} onClickItem={onClickItem} />
        <Wrapper>
          <Divider />
        </Wrapper>
        <Wrapper>
          <StyledLinkButton href={SOCIAL.phone.href} icon={<IconSvg type="phone" />}>
            {SOCIAL.phone.text1}
          </StyledLinkButton>
        </Wrapper>
        <Wrapper>
          <Social size={'medium'} />
        </Wrapper>
      </DrowerContent>
    </StyledDrawer>
  );
};
