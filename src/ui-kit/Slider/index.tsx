import React, { useRef, Children, PropsWithChildren } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import { StyledSwiper, ArrowButtonWrapper, ArrowsWrapper } from './styles';
import { SliderProps } from './types';
import { ArrowButton } from '../Button';

export const Slider: React.FC<PropsWithChildren & SliderProps> = ({ isNavigation, isLoop, children }) => {
  const modules = [Navigation, Autoplay];
  const arrayChildren = Children.toArray(children);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const navigationRefs = {
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  };
  const navigation = isNavigation && navigationRefs;

  return (
    <>
      <StyledSwiper
        loop={isLoop}
        navigation={navigation}
        autoplay={{ delay: 3000 }}
        modules={[...modules]}
        breakpoints={{
          320: {
            spaceBetween: 15,
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
      <ArrowsWrapper>
        <ArrowButtonWrapper ref={prevRef}>
          <ArrowButton direction="left" />
        </ArrowButtonWrapper>
        <ArrowButtonWrapper ref={nextRef}>
          <ArrowButton direction="right" />
        </ArrowButtonWrapper>
      </ArrowsWrapper>
    </>
  );
};
