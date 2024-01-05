import { Title } from '../../ui-kit/Title';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, Content, Item, ImageWrapper, Image, ItemTitle, ItemDescription } from './styles';
import { HelpInformProps } from './types';

export const HelpInform: React.FC<HelpInformProps> = ({ data }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>Як допомогти інформаційно</Title>
        <Content>
          {data.map((item) => (
            <Item key={item.id}>
              <ImageWrapper>
                <Image src={item.img} alt={item.title} />
              </ImageWrapper>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </Item>
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};
