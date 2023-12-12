import React from 'react';

import { TeamProps, TeamMemberProps } from './types';
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

export const TeamComponent: React.FC<TeamProps> = ({ team }) => {
  return (
    <TeamWrapper>
      <Container point={POINTS.m}>
        <Title>Команда</Title>
        <TeamContent>
          {team.map((member) => {
            return <TeamMember key={member.id} member={member} />;
          })}
        </TeamContent>
      </Container>
    </TeamWrapper>
  );
};

export const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <TeamMemberWrapper $isLink={!!member.link}>
      <ImageWrapper>
        <Image src={member.img} alt={member.name} />
      </ImageWrapper>
      <InfoWrapper>
        {member.name ? <TextInfo $isLink={!!member.link}>{member.name}</TextInfo> : <Plug />}
        <TextInfo $isLink={!!member.link}>{member.nickname}</TextInfo>
        <TextInfo $isLink={!!member.link}>{member.position}</TextInfo>
        {member.link && <ALink href={member.link} target="_blank" rel="noopener noreferrer" />}
      </InfoWrapper>
    </TeamMemberWrapper>
  );
};
