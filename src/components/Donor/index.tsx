import { Title } from '../../ui-kit/Title';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, Content, Subtitle, Item, Number, ItemTitle, ItemDescription, NumberWrapper } from './styles';
import { DonorProps } from '../../types/donor';

export const Donor: React.FC<DonorProps> = ({ data, t }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.donate')}</Title>
        <Subtitle>{data.text}</Subtitle>
        <Content>
          {data.list.map((item, idx) => {
            return (
              <Item key={item.id}>
                <NumberWrapper>
                  <Number>0{idx + 1}</Number>
                </NumberWrapper>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            );
          })}
        </Content>
      </Container>
    </Wrapper>
  );
};
