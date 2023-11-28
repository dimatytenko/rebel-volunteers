import React from 'react';

import { Wrapper, Title, Content, SliderWrapper, TextWrapper, Subtitle } from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Slider } from '../../ui-kit/Slider';
import { OurAtivityProps } from './types';

export const OurActivityComponent: React.FC<OurAtivityProps> = ({ data }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>наша діяльність</Title>
        <Content>
          <SliderWrapper>
            <Slider isNavigation isLoop>
              {data.map((item) => (
                <img key={item.id} src={item.img} alt="img" />
              ))}
            </Slider>
          </SliderWrapper>
          <TextWrapper>
            <Subtitle>
              Ми разом з командою однодумців займаємося підтримкою військових. Наші завдання різноманітні: забезпечення
              підрозділів харчуванням, надання медикаментів для поранених, аптечок та екіпірування для військових. Також
              ми надаємо допомогу підрозділам через наш волонтерський центр у місті Миколаєві.
            </Subtitle>
            <Subtitle>
              Віримо в Збройні Сили України, Територіальну Оборону, поліцію, Державну Службу Надзвичайних Ситуацій та
              лікарів!
            </Subtitle>
            <Subtitle>Віримо в кожного громадянина України!</Subtitle>
          </TextWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
};
