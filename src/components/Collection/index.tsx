import React from 'react';

import { CollectionComponentProps } from './types';
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
import { route } from '../../constants/routes';

export const CollectionComponent: React.FC<CollectionComponentProps> = ({ data }) => {
  return (
    <CollectionWrapper>
      <Container point={POINTS.m}>
        <CollectionContent $img={data.img}>
          <TitleWrapper>
            <CollectionTitle>терміновий збір</CollectionTitle>
            <Label>
              <LabeText>Ціль: {data.aim} грн</LabeText>
            </Label>
          </TitleWrapper>
          <DescriptionWrapper>
            <CollectionDescription>{data.description}</CollectionDescription>
            <CollectionDescription>Ціль: {data.aim} грн</CollectionDescription>
          </DescriptionWrapper>
          <StyledButton to={route.reports.path}>Задонатити</StyledButton>
        </CollectionContent>
      </Container>
    </CollectionWrapper>
  );
};
