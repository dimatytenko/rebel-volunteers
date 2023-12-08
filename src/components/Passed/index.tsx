import React from 'react';

import { PassedProps } from './types';
import {
  PassedWrapper,
  ContentWrapper,
  CardList,
  Card,
  Title,
  Subtitle,
  ImageWrapper,
  Image,
  TextCount,
  Description,
  BottomWrapper,
  BottomText,
  StyledButton,
} from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { route } from '../../constants/routes';

export const PassedComponents: React.FC<PassedProps> = ({ data }) => {
  return (
    <PassedWrapper>
      <Container point={POINTS.m}>
        <ContentWrapper>
          <CardList>
            {data.map((item) => {
              return (
                <Card key={item.id}>
                  {item.title && <Title>{item.title}</Title>}
                  {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
                  {item.img && (
                    <ImageWrapper>
                      <Image src={item.img} alt={item.id} />
                    </ImageWrapper>
                  )}
                  {item.count && <TextCount>{item.count}</TextCount>}
                  {item.descr && <Description>{item.descr}</Description>}
                </Card>
              );
            })}
          </CardList>
          <BottomWrapper>
            <BottomText>
              {`Бажаєте дізнатися більше про нашу діяльність? Натисніть "Звіт" нижче та розгляньте докладну інформацію про
            те, як ми надаємо допомогу і підтримку тим, хто цього потребує.`}
            </BottomText>
            <StyledButton to={route.reports.path} icon>
              Звіт
            </StyledButton>
          </BottomWrapper>
        </ContentWrapper>
      </Container>
    </PassedWrapper>
  );
};