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
  ALink,
} from './styles';

interface DonateProps {
  link?: string;
  lang?: string;
}

export const Donate: React.FC<DonateProps> = ({ link, lang }) => {
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
            <StyledTextIcon type={lang === 'en' ? 'donate-eng' : 'donate'} />
          </RotateWrapper>
          <StyledIcon />
          <ALink href={link} target="_blank" />
        </DonateWrapper>
      ) : (
        <DonateHeartWrapper>
          <StyledTextIcon type={lang === 'en' ? 'donate-eng' : 'donate'} />
          <StyledHeart />
          <StyledIcon />
          <ALink href={link} target="_blank" />
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
