import {
  StyledFooter,
  FooterContent,
  FooterRightContent,
  FooterTopContent,
  Title,
  FooterBottomContent,
  TextReserved,
  StyledLogo,
  LogoWrapper,
  FooterMobileContent,
  FooterMobileTopContent,
  FooterMobileBottomContent,
} from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Social } from '../Social';
import { Navigation } from '../Navigation';

interface FooterProps {
  path: string;
}

export const FooterComponent: React.FC<FooterProps> = ({ path }) => {
  return (
    <StyledFooter>
      <Container point={POINTS.m}>
        <FooterContent>
          <LogoWrapper>
            <StyledLogo mode="lg" />
          </LogoWrapper>
          <FooterRightContent>
            <FooterTopContent>
              <Title>rebel volunteers</Title>
              <Navigation path={path} />
            </FooterTopContent>
            <FooterBottomContent>
              <Social type="secondary" />
              <TextReserved>All right reserved</TextReserved>
            </FooterBottomContent>
          </FooterRightContent>
        </FooterContent>
        <FooterMobileContent>
          <FooterMobileTopContent>
            <LogoWrapper>
              <StyledLogo mode="lg" />
            </LogoWrapper>
            <Social type="secondary" />
          </FooterMobileTopContent>
          <FooterMobileBottomContent>
            <Navigation path={path} />
          </FooterMobileBottomContent>
        </FooterMobileContent>
      </Container>
    </StyledFooter>
  );
};
