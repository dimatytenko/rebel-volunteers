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
    title: 'Військові',
    text: 'Постачання військового спорядження, що включає в себе якісне обладнання та засоби індивідуального захисту.',
  },
  {
    id: '2',
    img: img_2,
    title: 'Постраждалі',
    text: 'Ми надаємо продукти та необхідні речі для людей чиє житло було зруйновано або пошкоджено.',
  },
  {
    id: '3',
    img: img_3,
    title: 'Лікарні',
    text: 'Надаємо медичну допомогу і постачання медикаментів для лікування поранених та тих, хто потребує допомоги',
  },
  {
    id: '4',
    img: img_4,
    title: 'Тварини',
    text: 'Забезпечуємо тварин годуванням та необхідною допомогою, щоб вони мали шанс на виживання у важких умовах.',
  },
];

export const Directions = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.direction')}</Title>
        <Content>
          {data.map((item) => (
            <Card key={item.id}>
              <Image src={item.img} alt={item.title} />
              <TextWrapper>
                <Subtitle>{item.title}</Subtitle>
                <StyledText>{item.text}</StyledText>
              </TextWrapper>
            </Card>
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};
