import { Title } from '../../ui-kit/Title';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { HelpMoreProps } from '../../types/helpMore';
import { Wrapper, Content, Item, ItemTitle, ItemText } from './styles';

export const HelpMore: React.FC<HelpMoreProps> = ({ data, t, lang }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.helpMore')}</Title>
        <Content>
          {data.map((item) => {
            return (
              <Item key={item.id} $back={item.img}>
                <ItemTitle>{item[`title_${lang}`]}</ItemTitle>
                <ItemText>{item[`description_${lang}`]}</ItemText>
              </Item>
            );
          })}
        </Content>
      </Container>
    </Wrapper>
  );
};
