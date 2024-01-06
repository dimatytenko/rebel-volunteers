import React from 'react';
import { useTranslation } from 'react-i18next';

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
import { SERVER_URL } from '../../constants/env';

export const PassedComponents: React.FC<ReportProps> = ({ data, lang }) => {
  const { t } = useTranslation();

  console.log('data', data);

  if (!data) return null;
  return (
    <PassedWrapper>
      <Container point={POINTS.m}>
        <ContentWrapper>
          <CardList>
            {data?.photos?.map((item) => {
              if (!item?.image && !item?.title) return <BlankCard key={item.id} />;
              return (
                <Card key={item.id}>
                  {item.title && <Title>{t(`common:titles.${item.title}`)}</Title>}
                  {item.subtitle && <Subtitle>{t(`common:titles.${item.subtitle}`)}</Subtitle>}
                  {item.image && (
                    <ImageWrapper>
                      <Image src={SERVER_URL + item.image} alt={item.id} />
                    </ImageWrapper>
                  )}
                  {item.quantity && <TextCount>{item.quantity}</TextCount>}
                  {item[`title_${lang}`] && <Description>{item[`title_${lang}`]}</Description>}
                </Card>
              );
            })}
          </CardList>
          <BottomWrapper>
            <BottomText>{data && data[`text_${lang}`]}</BottomText>
            <StyledButton to={route.reports.path} icon>
              {t('common:buttons.report')}
            </StyledButton>
          </BottomWrapper>
        </ContentWrapper>
      </Container>
    </PassedWrapper>
  );
};
