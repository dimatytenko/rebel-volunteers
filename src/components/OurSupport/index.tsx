import React from 'react';

import { OurSupportComponentProps } from './types';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, Title, StyledItem, Image, Link } from './styles';
import { Slider } from '../../ui-kit/Slider';

export const OurSupportComponent: React.FC<OurSupportComponentProps> = ({ data }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>нас підтримують</Title>
      </Container>
      <Container point={POINTS.l}>
        <Slider isNavigation isLoop isGrid>
          {data.map((item) => {
            return (
              <StyledItem key={item.id}>
                <Image src={item.logo} alt={item.name} />
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </Link>
              </StyledItem>
            );
          })}
        </Slider>
      </Container>
    </Wrapper>
  );
};
