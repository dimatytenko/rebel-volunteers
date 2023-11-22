import { StyledHeader } from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Logo } from '../../ui-kit/Logo';

export const HeaderComponent = () => {
  return (
    <StyledHeader>
      <Container point={POINTS.s}>
        <Logo width="78px" height="78px" />
      </Container>
    </StyledHeader>
  );
};
