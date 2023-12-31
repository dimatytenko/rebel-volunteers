import React from 'react';

import {
  CollectionWrapper,
  CollectionContent,
  CollectionTitle,
  TitleWrapper,
  DescriptionWrapper,
  CollectionDescription,
  StyledButton,
  Label,
  LabeText,
} from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { CollectionComponentProps } from '../../types/collection';

export const CollectionComponent: React.FC<CollectionComponentProps> = ({ data, lang, isLoading, t }) => {
  if (!data || isLoading) return null;

  return (
    <CollectionWrapper>
      <Container point={POINTS.m}>
        <CollectionContent $img={data?.photos[0].image}>
          <TitleWrapper>
            <CollectionTitle>{t('common:titles.collect')}</CollectionTitle>
            <Label>
              <LabeText>{data && data[`goal_${lang}`]}</LabeText>
            </Label>
          </TitleWrapper>
          <DescriptionWrapper>
            <CollectionDescription>{data && data[`text_${lang}`]}</CollectionDescription>
            <CollectionDescription>{data && data[`goal_${lang}`]}</CollectionDescription>
          </DescriptionWrapper>
          <StyledButton href={data?.donata_link} target={'_blank'}>
            {t('common:buttons.donate')}
          </StyledButton>
        </CollectionContent>
      </Container>
    </CollectionWrapper>
  );
};
