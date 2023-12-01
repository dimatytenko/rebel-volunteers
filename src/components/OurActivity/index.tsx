import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

import { Wrapper, Title, Content, SliderWrapper, TextWrapper, Subtitle } from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Slider } from '../../ui-kit/Slider';
import { OurAtivityProps } from './types';

export const OurActivityComponent: React.FC<OurAtivityProps> = ({ data }) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${data.galleryID}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>наша діяльність</Title>
        <Content>
          <SliderWrapper id={data.galleryID}>
            <Slider isNavigation isLoop>
              {data.images.map((item) => (
                <a
                  key={item.id}
                  href={item.img}
                  data-pswp-width={800}
                  data-pswp-height={600}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={item.img} alt="img" />
                </a>
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
