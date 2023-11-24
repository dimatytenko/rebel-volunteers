import { StyledHeader, HeaderContent, HeaderRightContent, SocialWrapper } from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Logo } from '../../ui-kit/Logo';
import { Social } from '../Social';
import { Navigation } from '../Navigation';
import { LinkButton } from '../../ui-kit/Button';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { SOCIAL } from '../../constants/links';
import { LangSwitch } from '../LangSwitch';

interface HeaderProps {
  path: string;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ path }) => {
  return (
    <StyledHeader>
      <Container point={POINTS.s}>
        <HeaderContent>
          <Logo width="78px" height="78px" />
          <HeaderRightContent>
            <Navigation path={path} />
            <SocialWrapper>
              <LangSwitch />
              <LinkButton href={SOCIAL.phone} icon={<IconSvg type="phone" />}>
                +38 096 1105 022
              </LinkButton>
              <Social />
            </SocialWrapper>
          </HeaderRightContent>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};
