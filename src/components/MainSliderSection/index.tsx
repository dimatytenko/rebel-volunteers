import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Title } from '../../ui-kit/Title';
import { Wrapper, SliderWrapper, ImageWrapper, Image } from './styles';
import { MainSliderSectionProps } from '../../types/mainSlider';
import { Slider } from '../../ui-kit/Slider';

export const MainSliderSection: React.FC<MainSliderSectionProps> = ({ title, isLoading, data, height, t }) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${data?.galleryID}`,
      children: 'a',
      initialZoomLevel: 'fit',
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
        <Title>{t(`common:titles.${title}`)}</Title>
      </Container>
      <Container point={POINTS.l}>
        <SliderWrapper id={data.galleryID}>
          <Slider
            isNavigation
            isMain
            isLoop
            spaceBetween={30}
            slidesPerViewXS={2}
            slidesPerViewM={3}
            slidesPerViewL={3}
            slidesPerViewXL={4}
            slidesPerViewXXL={5}
            slidesPerViewXXXL={6}
          >
            {data.images.map((item) => (
              <a
                key={item.id}
                href={item.image}
                data-pswp-width={600}
                data-pswp-height={800}
                target="_blank"
                rel="noreferrer"
              >
                <ImageWrapper $height={height}>
                  <Image src={item.image} alt="img" />
                </ImageWrapper>
              </a>
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </Wrapper>
  );
};
