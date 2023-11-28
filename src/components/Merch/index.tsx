import React from 'react';

import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, Content, SliderWrapper, TextWrapper, Title, Subtitle } from './styles';
import { Slider } from '../../ui-kit/Slider';
import { MerchProps } from './types';

export const MerchComponent: React.FC<MerchProps> = ({ data }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Content>
          <SliderWrapper>
            <Slider isNavigation isLoop>
              {data.map((item) => (
                <img key={item.id} src={item.img} alt="img" />
              ))}
            </Slider>
          </SliderWrapper>
          <TextWrapper>
            <Title>мерч</Title>
            <Subtitle>
              Слідкуйте за нашими колабами! Ми постійно розвиваємось і співпрацюємо з талановитими художниками та
              дизайнерами, щоб пропонувати вам сучасний і оригінальний мерч. Разом з нами ви завжди будете у тренді! За
              наявністю, слідкуйте в інстаграмі.
            </Subtitle>
          </TextWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
};
