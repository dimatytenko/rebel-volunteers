import React from 'react';

import { ReportProps } from '../../types/report';
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
  BlankCard,
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
            {data?.photos?.map((item, idx) => {
              if (!item?.image && !item?.title) return <BlankCard key={item.id + idx} />;
              return (
                <Card key={item.id + idx}>
                  {item.title && <Title>{t(`common:titles.${item.title}`)}</Title>}
                  {item.subtitle && <Subtitle>{t(`common:titles.${item.subtitle}`)}</Subtitle>}
                  {item.image && (
                    <ImageWrapper>
                      <Image src={item.image} alt={item.id} />
                    </ImageWrapper>
                  )}
                  {item.quantity && <TextCount>{item.quantity}</TextCount>}
                  {item[`title_${lang}`] && <Description>{item[`title_${lang}`]}</Description>}
                </Card>
              );
            })}
            <BottomWrapper>
              <BottomText>{data && data[`text_${lang}`]}</BottomText>
              <StyledButton to={route.reports.path} icon>
                {t('common:buttons.report')}
              </StyledButton>
            </BottomWrapper>
          </CardList>
        </ContentWrapper>
      </Container>
    </PassedWrapper>
  );
};
