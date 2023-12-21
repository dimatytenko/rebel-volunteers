import { useEffect, useState } from 'react';

import {
  DonateWrapper,
  DonateHeartWrapper,
  RotateWrapper,
  StyledIcon,
  StyledHeart,
  DonateWrapperPulsing,
  DonatePulsingButton,
  StyledTextIcon,
} from './styles';

export const Donate = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window?.pageYOffset > 500 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {!scrolled ? (
        <DonateWrapper>
          <RotateWrapper>
            <StyledTextIcon />
          </RotateWrapper>
          <StyledIcon />
        </DonateWrapper>
      ) : (
        <DonateHeartWrapper>
          <StyledTextIcon />
          <StyledHeart />
          <StyledIcon />
        </DonateHeartWrapper>
      )}
    </>
  );
};

export const DonatePulsing = () => {
  return (
    <DonateWrapperPulsing>
      <DonatePulsingButton>
        <StyledTextIcon />
        <StyledIcon />
      </DonatePulsingButton>
    </DonateWrapperPulsing>
  );
};
