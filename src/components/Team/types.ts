export interface TeamMemberT {
  name?: string;
  position: string;
  img: string;
  link?: string;
  nickname?: string;
  id: string;
}

export interface TeamProps {
  team: TeamMemberT[];
}

export interface TeamMemberProps {
  member: TeamMemberT;
}
