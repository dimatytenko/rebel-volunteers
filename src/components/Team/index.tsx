import React from 'react';
import { useTranslation } from 'react-i18next';

import { TeamProps, TeamMemberProps } from '../../types/team';
import {
  TeamWrapper,
  TeamContent,
  Title,
  TeamMemberWrapper,
  ImageWrapper,
  Image,
  InfoWrapper,
  TextInfo,
  Plug,
  ALink,
} from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';

export const TeamComponent: React.FC<TeamProps> = ({ team, lang }) => {
  const { t } = useTranslation();

  if (!team) return null;

  return (
    <TeamWrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.team')}</Title>
        <TeamContent>
          {team.map((member) => {
            return <TeamMember key={member.id} member={member} lang={lang} />;
          })}
        </TeamContent>
      </Container>
    </TeamWrapper>
  );
};

export const TeamMember: React.FC<TeamMemberProps> = ({ member, lang }) => {
  return (
    <TeamMemberWrapper $isLink={!!member.insta_link}>
      <ImageWrapper>
        <Image src={member.image_data} alt={member[`name_${lang}`]} />
      </ImageWrapper>
      <InfoWrapper>
        {member[`name_${lang}`] ? (
          <TextInfo $isLink={!!member.insta_link}>{member[`name_${lang}`]}</TextInfo>
        ) : (
          <Plug />
        )}
        <TextInfo $isLink={!!member.insta_link}>{member.nickname}</TextInfo>
        <TextInfo $isLink={!!member.insta_link}>{member[`role_${lang}`]}</TextInfo>
        {member.insta_link && <ALink href={member.insta_link} target="_blank" rel="noopener noreferrer" />}
      </InfoWrapper>
    </TeamMemberWrapper>
  );
};
