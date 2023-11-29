import React, { useRef, Children, PropsWithChildren } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Grid } from 'swiper/modules';

import { StyledSwiper, ArrowButtonWrapper, ArrowsWrapper, SliderWrapper } from './styles';
import { SliderProps } from './types';
import { ArrowButton } from '../Button';

export const Slider: React.FC<PropsWithChildren & SliderProps> = ({ isNavigation, isLoop, isGrid, children }) => {
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
    <SliderWrapper $isGrid={isGrid}>
      <StyledSwiper
        loop={isLoop}
        navigation={navigation}
        autoplay={isGrid ? undefined : { delay: 3000 }}
        grid={grid}
        $isGrid={isGrid}
        modules={[...modules]}
        breakpoints={{
          320: {
            spaceBetween: 15,
            slidesPerView: 1,
          },
          900: {
            slidesPerView: isGrid ? 2 : 1,
          },
          1224: {
            slidesPerView: isGrid ? 3 : 1,
          },
        }}
        onInit={(swiper) => {
          if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
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
      <ArrowsWrapper $isGrid={isGrid}>
        <ArrowButtonWrapper ref={prevRef} $isGrid={isGrid} $position="left">
          <ArrowButton direction="left" />
        </ArrowButtonWrapper>
        <ArrowButtonWrapper ref={nextRef} $isGrid={isGrid} $position="right">
          <ArrowButton direction="right" />
        </ArrowButtonWrapper>
      </ArrowsWrapper>
    </SliderWrapper>
  );
};
