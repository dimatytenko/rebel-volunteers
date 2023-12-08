import { Wrapper, Title } from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';

export const Widget = () => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>Наш інстаграм</Title>
        <div className="elfsight-app-53648f7a-8373-400e-94d2-a9a3ec4e5c83" data-elfsight-app-lazy></div>
      </Container>
    </Wrapper>
  );
};
