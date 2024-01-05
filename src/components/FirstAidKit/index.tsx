import { Title } from '../../ui-kit/Title';
import { Container } from '../../ui-kit/Container';

import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, Content, Subtitle, List, Item, ItemText, ImageWrapper, Image } from './styles';
import { IFirstAidKitProps } from './types';

export const FirstAidKit: React.FC<IFirstAidKitProps> = ({ data }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>Аптечка</Title>
        <Subtitle>{data.text}</Subtitle>
        <Content>
          <List>
            {data.list.map((item, index) => (
              <Item key={index}>
                <ItemText>{item}</ItemText>
              </Item>
            ))}
          </List>
          <ImageWrapper>
            <Image src={data.img} alt="Аптечка" />
          </ImageWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
};
