import { useTranslation } from 'react-i18next';

import img_1 from './assets/img_1.jpg';
import img_2 from './assets/img_2.jpg';
import img_3 from './assets/img_3.jpg';
import img_4 from './assets/img_4.jpg';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, Title, Content, Card, Image, TextWrapper, Subtitle, StyledText } from './styles';

const data = [
  {
    id: '1',
    img: img_1,
    title: 'title_1',
    text: 'text_1',
  },
  {
    id: '2',
    img: img_2,
    title: 'title_2',
    text: 'text_2',
  },
  {
    id: '3',
    img: img_3,
    title: 'title_3',
    text: 'text_3',
  },
  {
    id: '4',
    img: img_4,
    title: 'title_4',
    text: 'text_4',
  },
];

interface DirectionsProps {
  isLoading: boolean;
}

export const Directions: React.FC<DirectionsProps> = ({ isLoading }) => {
  const { t } = useTranslation();

  if (isLoading) return null;

  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.direction')}</Title>
        <Content>
          {data.map((item) => (
            <Card key={item.id}>
              <Image src={item.img} alt={item.title} />
              <TextWrapper>
                <Subtitle>{t(`common:directions.${item.title}`)}</Subtitle>
                <StyledText>{t(`common:directions.${item.text}`)}</StyledText>
              </TextWrapper>
            </Card>
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};
