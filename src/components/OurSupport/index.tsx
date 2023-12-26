import React from 'react';

import { OurSupportComponentProps } from './types';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, Title, ImageWrapper, Image, Link, TextLink } from './styles';
import { Slider } from '../../ui-kit/Slider';

export const OurSupportComponent: React.FC<OurSupportComponentProps> = ({ data }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>нас підтримують</Title>
      </Container>
      <Container point={POINTS.l}>
        <Slider isNavigation isLoop isGrid isMain>
          {data.map((item) => {
            return (
              <Link key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                <ImageWrapper>
                  <Image src={item.logo} alt={item.name} />
                </ImageWrapper>
                <TextLink>{item.name}</TextLink>
              </Link>
            );
          })}
        </Slider>
      </Container>
    </Wrapper>
  );
};
