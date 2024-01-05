import { Title } from '../../ui-kit/Title';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { HelpMoreProps } from './types';
import { Wrapper, Content, Item, ItemTitle, ItemText } from './styles';

export const HelpMore: React.FC<HelpMoreProps> = ({ data }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>Як ще можна допомогти</Title>
        <Content>
          {data.map((item) => {
            return (
              <Item key={item.id} $back={item.img}>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemText>{item.description}</ItemText>
              </Item>
            );
          })}
        </Content>
      </Container>
    </Wrapper>
  );
};
