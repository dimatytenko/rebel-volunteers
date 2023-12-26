import React, { useRef, Children, PropsWithChildren } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Grid } from 'swiper/modules';

import { StyledSwiper, ArrowButtonWrapper, ArrowsWrapper, SliderWrapper } from './styles';
import { SliderProps } from './types';
import { ArrowButton } from '../Button';

export const Slider: React.FC<PropsWithChildren & SliderProps> = ({
  isNavigation,
  isLoop,
  isGrid,
  isMain,
  spaceBetween,
  slidesPerViewXS,
  slidesPerViewM,
  slidesPerViewL,
  slidesPerViewXL,
  slidesPerViewXXL,
  slidesPerViewXXXL,

  children,
}) => {
  const modules = [Navigation, Autoplay, Grid];
  const arrayChildren = Children.toArray(children);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const navigationRefs = {
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  };
  const navigation = isNavigation && navigationRefs;
  const grid = isGrid ? { rows: 3 } : undefined;

  return (
    <SliderWrapper $isMain={isMain}>
      <ArrowsWrapper $isMain={isMain}>
        <ArrowButtonWrapper ref={prevRef} $isMain={isMain} $position="left">
          <ArrowButton direction="left" />
        </ArrowButtonWrapper>
        <ArrowButtonWrapper ref={nextRef} $isMain={isMain} $position="right">
          <ArrowButton direction="right" />
        </ArrowButtonWrapper>
      </ArrowsWrapper>
      <StyledSwiper
        loop={isLoop}
        navigation={navigation}
        autoplay={isGrid ? undefined : { delay: 3000 }}
        grid={grid}
        $isGrid={isGrid}
        modules={[...modules]}
        breakpoints={{
          320: {
            spaceBetween: spaceBetween ? spaceBetween : 15,
            slidesPerView: 1,
          },
          378: {
            slidesPerView: isGrid ? 1 : slidesPerViewXS ? slidesPerViewXS : 1,
          },
          768: {
            slidesPerView: isGrid ? 1 : slidesPerViewM ? slidesPerViewM : 1,
          },
          900: {
            slidesPerView: isGrid ? 2 : slidesPerViewL ? slidesPerViewL : 1,
          },
          1024: {
            slidesPerView: isGrid ? 2 : slidesPerViewXL ? slidesPerViewXL : 1,
          },
          1224: {
            slidesPerView: isGrid ? 3 : slidesPerViewXXL ? slidesPerViewXXL : 1,
          },
          1310: {
            slidesPerView: isGrid ? 3 : slidesPerViewXXXL ? slidesPerViewXXXL : 1,
          },
        }}
        onInit={(swiper) => {
          if (
            typeof swiper.params.navigation !== 'boolean' &&
            swiper.params.navigation &&
            prevRef.current &&
            nextRef.current
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {Children.map(arrayChildren, (child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </StyledSwiper>
    </SliderWrapper>
  );
};
