import { Sling as Hamburger } from 'hamburger-react';

import {
  StyledHeader,
  HeaderContent,
  HeaderRightContent,
  SocialWrapper,
  LogoWrapper,
  Menu,
  StyledLogo,
} from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';

import { Social } from '../Social';
import { Navigation } from '../Navigation';
import { LinkButton } from '../../ui-kit/Button';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { SOCIAL } from '../../constants/links';
import { LangSwitch } from '../LangSwitch';
import { IHeaderProps } from '../../types/layout';

export const HeaderComponent: React.FC<IHeaderProps> = ({ path, isOpenDrawer, onToggleDrawer, onCloseDrawer }) => {
  return (
    <StyledHeader>
      <Container point={POINTS.m}>
        <HeaderContent>
          <LogoWrapper>
            <StyledLogo onClick={onCloseDrawer} />
          </LogoWrapper>
          <HeaderRightContent>
            <Navigation path={path} />
            <SocialWrapper>
              <LangSwitch />
              <LinkButton href={SOCIAL.phone.href} icon={<IconSvg type="phone" />}>
                {SOCIAL.phone.text1}
              </LinkButton>
              <Social />
            </SocialWrapper>
          </HeaderRightContent>
          <Menu onClick={onToggleDrawer}>
            <Hamburger toggled={isOpenDrawer} aria-label="Burger button" />
          </Menu>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};
