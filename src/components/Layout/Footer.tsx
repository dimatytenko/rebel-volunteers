import {
  StyledFooter,
  FooterContent,
  FooterRightContent,
  FooterTopContent,
  Title,
  FooterBottomContent,
  TextReserved,
} from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Logo } from '../../ui-kit/Logo';
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
          <Logo width="78px" height="78px" />
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
      </Container>
    </StyledFooter>
  );
};
