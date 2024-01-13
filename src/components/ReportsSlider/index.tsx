import React from 'react';

import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Title } from '../../ui-kit/Title';
import { Wrapper, SliderWrapper, ImageWrapper, Image } from './styles';
import { Slider } from '../../ui-kit/Slider';
import { ReportsSliderProps } from '../../types/reportsSlider';

export const ReportsSlider: React.FC<ReportsSliderProps> = ({ title, data, t, isLoading }) => {
  if (!data || isLoading) return null;

  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t(`common:titles.${title}`)}</Title>
      </Container>
      <Container point={POINTS.l}>
        <SliderWrapper>
          <Slider
            isNavigation
            isMain
            isLoop
            noAutoPlay
            spaceBetween={30}
            slidesPerViewXL={2}
            slidesPerViewXXL={2}
            slidesPerViewXXXL={3}
          >
            {data.video.map((item) => (
              <ImageWrapper key={item.id}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item.video_url.split('v=')[1].split('&')[0]}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </ImageWrapper>
            ))}
            {data.photo.map((item) => (
              <ImageWrapper key={item.id}>
                <Image src={item.image} alt="img" />
              </ImageWrapper>
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </Wrapper>
  );
};
