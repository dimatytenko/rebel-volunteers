import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

import { Wrapper, Title, Content, SliderWrapper, TextWrapper, Subtitle, ImageWrapper, Image } from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Slider } from '../../ui-kit/Slider';
import { OurAtivityComponentProps } from '../../types/ourActivity';

export const OurActivityComponent: React.FC<OurAtivityComponentProps> = ({ data, lang, isLoading, t }) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#slider-activity',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data || isLoading) return null;

  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.activity')}</Title>
        <Content>
          <SliderWrapper id="slider-activity">
            <Slider isNavigation isLoop>
              {data?.photos.map((item) => (
                <a
                  key={item.id}
                  href={item.image}
                  data-pswp-width={800}
                  data-pswp-height={600}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImageWrapper>
                    <Image src={item.image} alt="slider" />
                  </ImageWrapper>
                </a>
              ))}
            </Slider>
          </SliderWrapper>
          <TextWrapper>
            {data?.text.map((item) => <Subtitle key={item.id}>{item[`text_${lang}`]}</Subtitle>)}
          </TextWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
};
