import React from 'react';

import { ReportProps } from '../../types/report';
import {
  PassedWrapper,
  ContentWrapper,
  CardList,
  Card,
  Title,
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

export const PassedComponents: React.FC<ReportProps> = ({ data, lang, isLoading, t }) => {
  if (!data || isLoading) return null;
  return (
    <PassedWrapper>
      <Container point={POINTS.m}>
        <ContentWrapper>
          <Title>{t('common:titles.reports')}</Title>
          <CardList>
            <BottomWrapper>
              <BottomText>{data && data[`text_${lang}`]}</BottomText>
              <StyledButton to={route.reports.path} icon>
                {t('common:buttons.report')}
              </StyledButton>
            </BottomWrapper>
            {data?.photos?.map((item) => {
              return (
                <Card key={item.id}>
                  {item.image && (
                    <ImageWrapper>
                      <Image src={item.image} alt={item.id} />
                    </ImageWrapper>
                  )}
                  {item.report.quantity && <TextCount>{item.report.quantity}</TextCount>}
                  {item.report[`title_${lang}`] && <Description>{item.report[`title_${lang}`]}</Description>}
                </Card>
              );
            })}
          </CardList>
        </ContentWrapper>
      </Container>
    </PassedWrapper>
  );
};
