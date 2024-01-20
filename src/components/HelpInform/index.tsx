import { Title } from '../../ui-kit/Title';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, Content, Item, ImageWrapper, Image, ItemTitle, ItemDescription } from './styles';
import { HelpInformProps } from '../../types/helpInform';

export const HelpInform: React.FC<HelpInformProps> = ({ data, t, lang }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.helpInform')}</Title>
        <Content>
          {data.map((item) => (
            <Item key={item.id}>
              <ImageWrapper>
                <Image src={item.img} alt={item[`title_${lang}`]} />
              </ImageWrapper>
              <ItemTitle>{item[`title_${lang}`]}</ItemTitle>
              <ItemDescription>{item[`description_${lang}`]}</ItemDescription>
            </Item>
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};
